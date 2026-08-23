"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import {
  CalendarDays,
  Car,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  Phone,
  RefreshCw,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useId, useState } from "react";
import type { ReactNode } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import type { UseFormRegisterReturn } from "react-hook-form";
import { z } from "zod";
import { formSupportItems } from "@/data/landing";
import { site } from "@/lib/site";

function normalizeContactPhone(value: string) {
  return value.replace(/[\s().-]/g, "");
}

function isValidVietnamPhone(value: string) {
  return /^(?:\+?84|0)\d{8,10}$/.test(normalizeContactPhone(value));
}

const tripRequestSchema = z.object({
  pickup: z.string().trim().min(3, "Vui lòng nhập điểm đón"),
  destination: z.string().trim().min(3, "Vui lòng nhập điểm trả"),
  travelDate: z.string().min(1, "Vui lòng chọn ngày đi"),
  travelTime: z.string().trim(),
  passengerCount: z.number().min(1, "Vui lòng chọn số khách"),
  vehiclePreference: z.string().optional(),
  customerName: z.string().trim().optional(),
  contactPhone: z
    .string()
    .trim()
    .min(9, "Vui lòng nhập SĐT/Zalo")
    .refine(isValidVietnamPhone, "SĐT/Zalo chưa đúng định dạng"),
  _gotcha: z.string().optional(),
});

type TripRequestFormValues = z.infer<typeof tripRequestSchema>;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

type BookingApiResponse = {
  success?: boolean;
  error?: string;
  fields?: Record<string, string>;
};

type TripRequestPayload = {
  pickup: string;
  destination: string;
  travelDate: string;
  travelTime: string;
  passengerCount: number;
  vehiclePreference?: string;
  customerName: string;
  contactPhone: string;
};

type SelectOption = {
  value: string;
  label: string;
  group?: string;
  capacity?: number;
};

const passengerOptions: SelectOption[] = Array.from({ length: 16 }, (_, index) => {
  const value = String(index + 1);
  return { value, label: `${value} khách` };
});

const vehicleOptions: SelectOption[] = [
  { value: "Bảo Trang tư vấn xe phù hợp", label: "Bảo Trang tư vấn xe phù hợp", capacity: 16 },
  { value: "Xe điện 5 chỗ", label: "Xe điện 5 chỗ", group: "Ưu tiên", capacity: 5 },
  { value: "Xe 4 chỗ", label: "Xe 4 chỗ", group: "Xe con 4-7 chỗ", capacity: 4 },
  { value: "Xe 5 chỗ", label: "Xe 5 chỗ", group: "Xe con 4-7 chỗ", capacity: 5 },
  { value: "Xe 7 chỗ", label: "Xe 7 chỗ", group: "Xe con 4-7 chỗ", capacity: 7 },
  { value: "Xe 16 chỗ", label: "Xe 16 chỗ (nhóm đông)", group: "Nhóm đông", capacity: 16 },
];

const locationOptions: SelectOption[] = [
  {
    value: "Đà Nẵng (đón trả tận nơi)",
    label: "Đà Nẵng (đón trả tận nơi)",
  },
  {
    value: "Quảng Trị (đón trả tận nơi)",
    label: "Quảng Trị (đón trả tận nơi)",
  },
  {
    value: "TX Quảng Trị (đón trả tận nơi)",
    label: "TX Quảng Trị (đón trả tận nơi)",
  },
  {
    value: "Đông Hà (đón trả tận nơi)",
    label: "Đông Hà (đón trả tận nơi)",
  },
  {
    value: "Lao Bảo (đón trả tận nơi)",
    label: "Lao Bảo (đón trả tận nơi)",
  },
  {
    value: "Quảng Bình (đón trả tận nơi)",
    label: "Quảng Bình (đón trả tận nơi)",
  },
  {
    value: "Lệ Thủy (đón trả tận nơi)",
    label: "Lệ Thủy (đón trả tận nơi)",
  },
  {
    value: "Đồng Hới (đón trả tận nơi)",
    label: "Đồng Hới (đón trả tận nơi)",
  },
];

const defaultTripRequestValues: TripRequestFormValues = {
  pickup: "",
  destination: "",
  travelDate: "",
  travelTime: "",
  passengerCount: 1,
  vehiclePreference: "Bảo Trang tư vấn xe phù hợp",
  customerName: "",
  contactPhone: "",
  _gotcha: "",
};

function getTodayTravelDate() {
  const parts = new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
  }).formatToParts(new Date());
  const partMap = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return `${partMap.day}/${partMap.month}/${partMap.year}`;
}

function getDefaultTripRequestValues(): TripRequestFormValues {
  return {
    ...defaultTripRequestValues,
    travelDate: getTodayTravelDate(),
  };
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="field-error">{message}</p>;
}

function groupOptions(options: SelectOption[]) {
  return options.reduce<Record<string, SelectOption[]>>((groups, option) => {
    const group = option.group || "";
    groups[group] = groups[group] || [];
    groups[group].push(option);
    return groups;
  }, {});
}

function getVehicleCapacity(vehiclePreference?: string) {
  const optionCapacity = vehicleOptions.find((option) => option.value === vehiclePreference)?.capacity;
  if (optionCapacity) return optionCapacity;
  if (vehiclePreference?.includes("16 chỗ")) return 16;
  if (vehiclePreference?.includes("4 chỗ")) return 4;
  if (vehiclePreference?.includes("5 chỗ") || vehiclePreference?.includes("Xe điện")) return 5;
  return 7;
}

function buildTripMessage(payload: TripRequestPayload) {
  return `YÊU CẦU BÁO GIÁ XE RIÊNG / XE HỢP ĐỒNG - ${site.name}
Tên: ${payload.customerName || "Chưa cung cấp"}
SĐT/Zalo: ${payload.contactPhone}
Điểm đón tận nơi: ${payload.pickup}
Điểm trả tận nơi: ${payload.destination}
Ngày sử dụng xe: ${payload.travelDate}
Giờ đón dự kiến: ${payload.travelTime || "Chưa xác định"}
Số khách: ${payload.passengerCount}
Dòng xe mong muốn: ${payload.vehiclePreference || "Bảo Trang tư vấn xe phù hợp"}`;
}

function getBookingApiErrorMessage(result: BookingApiResponse | null) {
  const firstFieldError = Object.values(result?.fields || {})[0];
  return (
    result?.error ||
    firstFieldError ||
    "Chưa gửi được yêu cầu. Bạn thử lại một lần nữa hoặc nhắn Zalo để Bảo Trang hỗ trợ ngay."
  );
}

function pushTripFormEvent(eventName: string, eventData: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.pushEvent?.(eventName, {
    form_id: "trip-request-form",
    form_name: "trip_request",
    ...eventData,
  });
}

function LocationTextField({
  label,
  placeholder,
  icon,
  inputProps,
  suggestions,
}: {
  label: string;
  placeholder: string;
  icon: ReactNode;
  inputProps: UseFormRegisterReturn;
  suggestions: SelectOption[];
}) {
  const labelId = useId();
  const listId = useId();

  return (
    <div className="field location-field">
      <span id={labelId}>{label}</span>
      <span className="input-shell location-input-shell">
        <span className="field-icon">{icon}</span>
        <input
          {...inputProps}
          aria-labelledby={labelId}
          autoComplete="street-address"
          list={listId}
          placeholder={placeholder}
        />
      </span>
      <datalist id={listId}>
        {suggestions.map((option) => (
          <option key={option.value} value={option.value} />
        ))}
      </datalist>
    </div>
  );
}

function FormSelect({
  label,
  value,
  placeholder,
  options,
  onValueChange,
  icon,
}: {
  label: string;
  value?: string;
  placeholder: string;
  options: SelectOption[];
  onValueChange: (value: string) => void;
  icon: ReactNode;
}) {
  const labelId = useId();
  const optionGroups = groupOptions(options);

  return (
    <div className="field">
      <span id={labelId}>{label}</span>
      <Select.Root value={value} onValueChange={onValueChange}>
        <Select.Trigger className="select-trigger" aria-labelledby={labelId}>
          <span className="field-icon">{icon}</span>
          <Select.Value placeholder={placeholder} />
          <Select.Icon className="select-chevron">
            <ChevronDown size={16} aria-hidden="true" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="select-content" position="popper" sideOffset={8}>
            <Select.Viewport className="select-viewport">
              {Object.entries(optionGroups).map(([group, groupOptions]) => (
                <Select.Group key={group || "default"}>
                  {group ? <Select.Label className="select-label">{group}</Select.Label> : null}
                  {groupOptions.map((option) => (
                    <Select.Item className="select-item" value={option.value} key={option.value}>
                      <Select.ItemText>{option.label}</Select.ItemText>
                      <Select.ItemIndicator>
                        <Check size={14} aria-hidden="true" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.Group>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

export function TripRequestForm() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const submitting = submitStatus === "submitting";

  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
    setValue,
  } = useForm<TripRequestFormValues>({
    resolver: zodResolver(tripRequestSchema),
    defaultValues: defaultTripRequestValues,
  });

  const selectedVehiclePreference = useWatch({
    control,
    name: "vehiclePreference",
  });
  const selectedVehicleCapacity = getVehicleCapacity(selectedVehiclePreference);
  const availablePassengerOptions = passengerOptions.filter((option) => Number(option.value) <= selectedVehicleCapacity);

  useEffect(() => {
    if (!getValues("travelDate")) {
      setValue("travelDate", getTodayTravelDate());
    }
  }, [getValues, setValue]);

  useEffect(() => {
    const onVehicleSelect = (event: Event) => {
      const selected = (event as CustomEvent<string>).detail;
      if (selected) {
        setValue("vehiclePreference", selected, {
          shouldDirty: true,
          shouldValidate: true,
        });
        document.getElementById("yeu-cau-chuyen-di")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    window.addEventListener("bao-trang:select-vehicle", onVehicleSelect);
    return () => window.removeEventListener("bao-trang:select-vehicle", onVehicleSelect);
  }, [setValue]);

  useEffect(() => {
    const currentPassengerCount = getValues("passengerCount");
    if (currentPassengerCount > selectedVehicleCapacity) {
      setValue("passengerCount", selectedVehicleCapacity, {
        shouldDirty: true,
        shouldValidate: true,
      });
    }
  }, [getValues, selectedVehicleCapacity, setValue]);

  const swapLocations = () => {
    const pickup = getValues("pickup");
    const destination = getValues("destination");
    setValue("pickup", destination, { shouldDirty: true, shouldValidate: true });
    setValue("destination", pickup, { shouldDirty: true, shouldValidate: true });
  };

  const onSubmit = async (values: TripRequestFormValues) => {
    if (values._gotcha?.trim()) {
      reset(getDefaultTripRequestValues());
      return;
    }

    if (!site.bookingApiUrl) {
      setSubmitStatus("error");
      setSubmitMessage(
        "Form chưa có endpoint nhận yêu cầu. Thêm NEXT_PUBLIC_BOOKING_API_URL rồi build lại website.",
      );
      pushTripFormEvent("trip_form_submit_error", { reason: "missing_booking_api_url" });
      return;
    }

    setSubmitStatus("submitting");
    setSubmitMessage("Đang gửi yêu cầu báo giá, giữ máy một chút nhé.");
    const payload = {
      pickup: values.pickup,
      destination: values.destination,
      travelDate: values.travelDate,
      travelTime: values.travelTime,
      passengerCount: values.passengerCount,
      vehiclePreference: values.vehiclePreference,
      customerName: values.customerName?.trim() || "",
      contactPhone: normalizeContactPhone(values.contactPhone),
    };
    const tripMessage = buildTripMessage(payload);

    pushTripFormEvent("trip_form_submit_start", {
      pickup: payload.pickup,
      destination: payload.destination,
      passenger_count: payload.passengerCount,
      vehicle_preference: payload.vehiclePreference,
    });

    try {
      const response = await fetch(site.bookingApiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _hp: values._gotcha || "",
          _gotcha: values._gotcha || "",
          source: site.url,
          service_type: "Xe riêng / xe hợp đồng / transfer",
          form_name: "trip_request",
          ...payload,
          name: payload.customerName,
          phone: payload.contactPhone,
          dropoff: payload.destination,
          date: payload.travelDate,
          time: payload.travelTime,
          seats: String(payload.passengerCount),
          passengers: String(payload.passengerCount),
          vehicleType: payload.vehiclePreference,
          vehicle_type: payload.vehiclePreference,
          message: tripMessage,
          order_info: tripMessage,
        }),
      });

      const result = (await response.json().catch(() => null)) as BookingApiResponse | null;
      if (!response.ok || !result?.success) {
        throw new Error(getBookingApiErrorMessage(result));
      }

      setSubmitStatus("success");
      setSubmitMessage("Đã nhận yêu cầu báo giá. Bảo Trang sẽ gọi lại qua SĐT/Zalo bạn vừa để lại.");
      pushTripFormEvent("lead_submit", {
        pickup: payload.pickup,
        destination: payload.destination,
        passenger_count: payload.passengerCount,
        vehicle_preference: payload.vehiclePreference,
      });
      window.trackConversion?.("booking");
      setDialogOpen(true);
      reset(getDefaultTripRequestValues());
    } catch (error) {
      console.error("Trip request submit failed:", error);
      const message =
        error instanceof Error
          ? error.message
          : "Chưa gửi được yêu cầu. Bạn thử lại một lần nữa hoặc nhắn Zalo để Bảo Trang hỗ trợ ngay.";
      setSubmitStatus("error");
      setSubmitMessage(message);
      pushTripFormEvent("trip_form_submit_error", {
        pickup: payload.pickup,
        destination: payload.destination,
        reason: message,
      });
    }
  };

  return (
    <>
      <form
        id="yeu-cau-chuyen-di"
        className="trip-form"
        action={site.bookingApiUrl || undefined}
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        aria-busy={submitting}
        aria-describedby={submitMessage ? "trip-form-status" : undefined}
        noValidate
      >
        <div className="honeypot-field" aria-hidden="true">
          <label>
            Website
            <input tabIndex={-1} autoComplete="off" {...register("_gotcha")} />
          </label>
        </div>

        <div className="trip-form__heading">
          <div className="form-title-icon">
            <Car size={22} aria-hidden="true" />
          </div>
          <div>
            <h2>Yêu cầu báo giá xe riêng</h2>
            <p>Gửi lịch trình, Bảo Trang tư vấn xe 4, 5, 7 chỗ và báo giá theo chuyến.</p>
          </div>
        </div>

        {submitMessage ? (
          <div
            id="trip-form-status"
            className={`form-status form-status--${submitStatus}`}
            role={submitStatus === "error" ? "alert" : "status"}
          >
            <span>{submitMessage}</span>
            {submitStatus === "error" ? (
              <a href={site.zaloUrl} target="_blank" rel="nofollow noopener">
                Nhắn Zalo
              </a>
            ) : null}
          </div>
        ) : null}

        <div className="trip-grid trip-grid--locations">
          <div>
            <LocationTextField
              label="Điểm đón tận nơi"
              placeholder="Sân bay, khách sạn, địa chỉ..."
              inputProps={register("pickup")}
              icon={<MapPin size={17} aria-hidden="true" className="input-icon--green" />}
              suggestions={locationOptions}
            />
            <FieldError message={errors.pickup?.message} />
          </div>

          <button className="swap-button" type="button" aria-label="Đổi chiều điểm đón và điểm đến" onClick={swapLocations}>
            <RefreshCw size={18} aria-hidden="true" />
          </button>

          <div>
            <LocationTextField
              label="Điểm trả tận nơi"
              placeholder="Đông Hà, Đồng Hới, địa chỉ..."
              inputProps={register("destination")}
              icon={<MapPin size={17} aria-hidden="true" className="input-icon--red" />}
              suggestions={locationOptions}
            />
            <FieldError message={errors.destination?.message} />
          </div>
        </div>

        <div className="trip-grid trip-grid--details">
          <label className="field">
            <span>Ngày sử dụng xe</span>
            <span className="input-shell">
              <CalendarDays size={17} aria-hidden="true" className="input-icon" />
              <input placeholder="dd/mm/yyyy" inputMode="numeric" autoComplete="off" {...register("travelDate")} />
            </span>
            <FieldError message={errors.travelDate?.message} />
          </label>

          <label className="field">
            <span>Giờ đón dự kiến</span>
            <span className="input-shell">
              <Clock3 size={17} aria-hidden="true" className="input-icon" />
              <input type="time" step={300} {...register("travelTime")} />
            </span>
          </label>

          <Controller
            name="passengerCount"
            control={control}
            render={({ field }) => (
              <div>
                <FormSelect
                  label="Số khách"
                  value={String(field.value || "")}
                  placeholder="Chọn số khách"
                  onValueChange={(value) => field.onChange(Number(value))}
                  icon={<UserRound size={17} aria-hidden="true" />}
                  options={availablePassengerOptions}
                />
                <FieldError message={errors.passengerCount?.message} />
              </div>
            )}
          />

          <Controller
            name="vehiclePreference"
            control={control}
            render={({ field }) => (
              <FormSelect
                label="Dòng xe mong muốn"
                value={field.value}
                placeholder="Bảo Trang tư vấn xe phù hợp"
                onValueChange={field.onChange}
                icon={<Car size={17} aria-hidden="true" />}
                options={vehicleOptions}
              />
            )}
          />
        </div>

        <div className="trip-grid trip-grid--contact">
          <label className="field">
            <span>Tên / xưng hô</span>
            <span className="input-shell">
              <UserRound size={17} aria-hidden="true" className="input-icon" />
              <input placeholder="VD: Anh Minh" autoComplete="name" {...register("customerName")} />
            </span>
          </label>

          <label className="field">
            <span>SĐT/Zalo liên hệ</span>
            <span className="input-shell">
              <Phone size={17} aria-hidden="true" className="input-icon" />
              <input
                placeholder="Số điện thoại hoặc Zalo"
                inputMode="tel"
                autoComplete="tel"
                {...register("contactPhone")}
              />
            </span>
            <FieldError message={errors.contactPhone?.message} />
          </label>
        </div>

        <button className="submit-button" type="submit" disabled={submitting} aria-live="polite">
          {submitting ? "Đang gửi..." : "Gửi yêu cầu báo giá"}
        </button>

        <div className="form-support">
          {formSupportItems.map((item) => {
            const Icon = item.icon;
            return (
              <span key={item.label}>
                <Icon size={16} aria-hidden="true" />
                {item.label}
              </span>
            );
          })}
        </div>
      </form>

      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay" />
          <Dialog.Content className="success-dialog">
            <Dialog.Close className="dialog-close" aria-label="Đóng">
              <X size={18} aria-hidden="true" />
            </Dialog.Close>
            <Dialog.Title>Đã nhận yêu cầu báo giá</Dialog.Title>
            <Dialog.Description>
              Bảo Trang sẽ gọi lại qua SĐT/Zalo để xác nhận lịch trình, tư vấn loại xe và báo giá theo chuyến.
            </Dialog.Description>
            <div className="dialog-actions">
              <a className="btn btn-primary" href={site.zaloUrl} target="_blank" rel="nofollow noopener">
                Liên hệ Zalo
              </a>
              <Dialog.Close className="btn btn-secondary">Đóng</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
