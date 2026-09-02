import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CalendarCheck2,
  Car,
  Clock3,
  Headphones,
  MapPin,
  RefreshCw,
  Route,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Users,
  WalletCards,
} from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "green" | "blue" | "amber" | "slate";
};

export type Journey = {
  id: string;
  from: string;
  to: string;
  image: string;
  description: string;
  estimate: string;
  guideHref?: string;
};

export type RoutePrice = {
  id: string;
  route: string;
  price: string;
};

export type Vehicle = {
  id: string;
  name: string;
  capacity: number;
  image: string;
  badge?: string;
  tags: string[];
  highlights: string[];
  suitableFor: string;
};

export type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const navigationItems: NavigationItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Xe riêng", href: "/xe-rieng-da-nang-quang-tri" },
  { label: "Xe ghép", href: "/xe-ghep-da-nang-quang-tri" },
  { label: "Khu vực phục vụ", href: "/khu-vuc-phuc-vu-xe-da-nang-quang-tri" },
  { label: "Bảng giá", href: "/bang-gia-xe-da-nang-quang-tri" },
  { label: "Dòng xe", href: "/dong-xe-da-nang-quang-tri" },
  { label: "Liên hệ", href: "/lien-he-dat-xe-da-nang-quang-tri" },
];

export const heroBenefits: Benefit[] = [
  {
    title: "An toàn",
    description: "Kiểm tra xe trước chuyến, chạy theo lịch đã hẹn",
    icon: ShieldCheck,
    tone: "green",
  },
  {
    title: "Đúng giờ",
    description: "Căn theo giờ bay, giờ họp, giờ về quê",
    icon: Clock3,
    tone: "blue",
  },
  {
    title: "Đón trả tận nơi",
    description: "Sảnh sân bay, khách sạn, nhà riêng, điểm hẹn",
    icon: MapPin,
    tone: "green",
  },
  {
    title: "Thoải mái",
    description: "Không ghép lạ nếu bạn chọn xe riêng",
    icon: Users,
    tone: "slate",
  },
];

export const journeys: Journey[] = [
  {
    id: "danang-quangtri",
    from: "Đà Nẵng",
    to: "Quảng Trị",
    image: "/assets/bao-trang/journey-da-nang.webp",
    description: "Hải Lăng, TX Quảng Trị, Đông Hà; gửi địa chỉ cụ thể để tính chuyến.",
    estimate: "~3-4 giờ",
    guideHref: "/bai-viet/dat-xe-rieng-da-nang-quang-tri",
  },
  {
    id: "danang-dongha",
    from: "Đà Nẵng",
    to: "Đông Hà",
    image: "/assets/bao-trang/journey-quang-tri.webp",
    description: "Chặng khách hỏi nhiều cho công tác, về quê, khám bệnh hoặc đón sân bay.",
    estimate: "~3.5-4 giờ",
    guideHref: "/bai-viet/xe-da-nang-di-dong-ha",
  },
  {
    id: "danang-laobao",
    from: "Đà Nẵng",
    to: "Lao Bảo",
    image: "/assets/bao-trang/journey-hue.webp",
    description: "Xa hơn Đông Hà; nên nói rõ giờ cần đến, hành lý và điểm dừng.",
    estimate: "~5-6 giờ",
    guideHref: "/bai-viet/xe-da-nang-di-lao-bao",
  },
  {
    id: "danang-quangbinh",
    from: "Đà Nẵng",
    to: "Quảng Bình",
    image: "/assets/bao-trang/journey-quang-binh.webp",
    description: "Lệ Thủy, Đồng Hới; hợp chuyến đi tiếp sau khi qua Huế hoặc Quảng Trị.",
    estimate: "~4.5-5.5 giờ",
    guideHref: "/bai-viet/dat-xe-rieng-da-nang-quang-binh",
  },
];

export const routePrices: RoutePrice[] = [
  {
    id: "danang-hailang",
    route: "Đà Nẵng ⇄ Hải Lăng",
    price: "từ 1tr5/chuyến",
  },
  {
    id: "danang-quangtri",
    route: "Đà Nẵng ⇄ Quảng Trị",
    price: "từ 1tr6/chuyến",
  },
  {
    id: "danang-dongha",
    route: "Đà Nẵng ⇄ Đông Hà",
    price: "từ 1tr7/chuyến",
  },
  {
    id: "danang-giolinh",
    route: "Đà Nẵng ⇄ Gio Linh",
    price: "từ 1tr8/chuyến",
  },
  {
    id: "danang-vinhlinh",
    route: "Đà Nẵng ⇄ Vĩnh Linh",
    price: "từ 2tr2/chuyến",
  },
  {
    id: "danang-laobao",
    route: "Đà Nẵng ⇄ Lao Bảo",
    price: "từ 2tr3/chuyến",
  },
  {
    id: "danang-lethuy-donghoi",
    route: "Đà Nẵng ⇄ Lệ Thủy, Đồng Hới",
    price: "từ 2tr3/chuyến",
  },
];

export const vehicles: Vehicle[] = [
  {
    id: "vf6",
    name: "VF6 (Xe điện)",
    capacity: 5,
    image: "/assets/bao-trang/vehicle-vf6.webp",
    badge: "ƯU TIÊN",
    tags: ["Yên tĩnh", "Xe điện"],
    highlights: [
      "Khoang xe yên, hợp 1-3 khách",
      "Không mùi xăng dầu",
      "Đi êm khi hành lý gọn",
    ],
    suitableFor: "1-3 khách ít vali, ưu tiên xe mới và yên tĩnh.",
  },
  {
    id: "innova",
    name: "Toyota Innova",
    capacity: 7,
    image: "/assets/bao-trang/vehicle-innova.webp",
    tags: ["Rộng rãi", "Điều hòa"],
    highlights: [
      "Ghế ngồi dễ chịu cho chặng 3-4 giờ",
      "Cốp đựng vali tốt hơn xe nhỏ",
      "Hợp gia đình có trẻ em hoặc người lớn tuổi",
    ],
    suitableFor: "Gia đình, nhóm nhỏ và khách mang nhiều vali.",
  },
  {
    id: "xpander",
    name: "Mitsubishi Xpander",
    capacity: 7,
    image: "/assets/bao-trang/vehicle-xpander.webp",
    tags: ["Tiện nghi", "Điều hòa"],
    highlights: [
      "Dễ lên xuống khi có trẻ em hoặc người lớn tuổi",
      "Khoang xe gọn, sạch trước chuyến",
      "Hợp đón sân bay rồi đi thẳng về Quảng Trị",
    ],
    suitableFor: "Khách gia đình, công tác và chuyến cần dừng nghỉ.",
  },
  {
    id: "everest",
    name: "Ford Everest",
    capacity: 7,
    image: "/assets/bao-trang/vehicle-everest.webp",
    tags: ["Cao cấp", "Thoải mái"],
    highlights: [
      "Không gian rộng hơn cho chặng dài",
      "Ngồi chắc, hợp cung xa như Lao Bảo",
      "Giữ sự riêng tư cho khách công tác hoặc gia đình",
    ],
    suitableFor: "Khách muốn xe rộng, yên tĩnh và riêng tư hơn.",
  },
];

export const whyChooseUs: Benefit[] = [
  {
    title: "Tài xế quen tuyến",
    description: "Biết điểm đón ở sân bay, Huế, Hải Lăng, Đông Hà",
    icon: UserRoundCheck,
    tone: "green",
  },
  {
    title: "Xe sạch, đi êm",
    description: "Dọn xe trước chuyến, nhắc nếu cần xe rộng hơn",
    icon: Car,
    tone: "blue",
  },
  {
    title: "Báo giá trước",
    description: "Nói rõ một chiều, khứ hồi, chờ, ghé thêm điểm",
    icon: WalletCards,
    tone: "amber",
  },
  {
    title: "Zalo/SĐT nhanh",
    description: "Dễ gửi định vị, vé bay, số vali",
    icon: Headphones,
    tone: "slate",
  },
];

export const bookingSteps: ProcessStep[] = [
  {
    title: "Gửi lịch trình",
    description: "Điểm đón/trả, giờ đi hoặc giờ cần có mặt",
    icon: Route,
  },
  {
    title: "Nghe tư vấn",
    description: "Bảo Trang kiểm tra xe, chỗ và giá theo chuyến",
    icon: CalendarCheck2,
  },
  {
    title: "Chốt chuyến",
    description: "Thống nhất loại xe, số khách, hành lý, điểm hẹn",
    icon: BadgeCheck,
  },
  {
    title: "Lên xe",
    description: "Tài xế gọi trước giờ đón và chạy theo lịch đã chốt",
    icon: Sparkles,
  },
];

export const formSupportItems = [
  { label: "Giá theo chuyến", icon: BadgeCheck },
  { label: "Căn giờ đón", icon: RefreshCw },
  { label: "Đón đúng điểm", icon: ShieldCheck },
];
