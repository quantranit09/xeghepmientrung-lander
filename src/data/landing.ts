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
  { label: "Bảng giá", href: "/#gia" },
  { label: "Khu vực phục vụ", href: "/#hanh-trinh" },
  { label: "Dòng xe", href: "/#dich-vu" },
  { label: "Liên hệ", href: "/#yeu-cau-chuyen-di" },
];

export const heroBenefits: Benefit[] = [
  {
    title: "An toàn",
    description: "Xe được kiểm định, bảo hiểm đầy đủ",
    icon: ShieldCheck,
    tone: "green",
  },
  {
    title: "Đúng giờ",
    description: "Hẹn giờ rõ ràng, chủ động lịch",
    icon: Clock3,
    tone: "blue",
  },
  {
    title: "Đón trả tận nơi",
    description: "Nhà riêng, sân bay, khách sạn",
    icon: MapPin,
    tone: "green",
  },
  {
    title: "Thoải mái",
    description: "Xe sạch, đi êm, riêng tư",
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
    description: "Hải Lăng, TX Quảng Trị, Đông Hà và các điểm đón trả theo yêu cầu.",
    estimate: "~3-4 giờ",
  },
  {
    id: "danang-dongha",
    from: "Đà Nẵng",
    to: "Đông Hà",
    image: "/assets/bao-trang/journey-quang-tri.webp",
    description: "Xe riêng theo chuyến, phù hợp công tác, gia đình hoặc lịch hẹn.",
    estimate: "~3.5-4 giờ",
  },
  {
    id: "danang-laobao",
    from: "Đà Nẵng",
    to: "Lao Bảo",
    image: "/assets/bao-trang/journey-hue.webp",
    description: "Chặng xa hơn, nên gửi trước giờ đi, hành lý và điểm dừng.",
    estimate: "~5-6 giờ",
  },
  {
    id: "danang-quangbinh",
    from: "Đà Nẵng",
    to: "Quảng Bình",
    image: "/assets/bao-trang/journey-quang-binh.webp",
    description: "Lệ Thủy, Đồng Hới và các điểm lân cận khi khách cần đi tiếp.",
    estimate: "~4.5-5.5 giờ",
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
    tags: ["Êm ái", "Không khí thải"],
    highlights: [
      "Xe điện 5 chỗ",
      "Không gian hiện đại",
      "Vận hành êm, thân thiện môi trường",
    ],
    suitableFor: "1-4 hành khách, đi nội đô hoặc transfer ngắn.",
  },
  {
    id: "innova",
    name: "Toyota Innova",
    capacity: 7,
    image: "/assets/bao-trang/vehicle-innova.webp",
    tags: ["Rộng rãi", "Điều hòa"],
    highlights: [
      "Khoang ngồi thoải mái cho gia đình",
      "Phù hợp chặng đường dài",
      "Không gian hành lý tốt",
    ],
    suitableFor: "Gia đình, nhóm nhỏ và khách có nhiều hành lý.",
  },
  {
    id: "xpander",
    name: "Mitsubishi Xpander",
    capacity: 7,
    image: "/assets/bao-trang/vehicle-xpander.webp",
    tags: ["Tiện nghi", "Điều hòa"],
    highlights: [
      "Dễ lên xuống, phù hợp nhiều nhóm khách",
      "Khoang xe sạch sẽ, vận hành ổn định",
      "Phù hợp transfer sân bay và liên tỉnh",
    ],
    suitableFor: "Khách gia đình, công tác và lịch trình dài trong ngày.",
  },
  {
    id: "everest",
    name: "Ford Everest",
    capacity: 7,
    image: "/assets/bao-trang/vehicle-everest.webp",
    tags: ["Cao cấp", "Thoải mái"],
    highlights: [
      "Không gian cao cấp hơn cho chặng dài",
      "Êm, chắc chắn, phù hợp đường xa",
      "Tốt cho nhóm cần trải nghiệm riêng tư",
    ],
    suitableFor: "Khách ưu tiên sự thoải mái và hình ảnh chuyên nghiệp.",
  },
];

export const whyChooseUs: Benefit[] = [
  {
    title: "Tài xế quen đường",
    description: "Rành Đà Nẵng, Đông Hà, Quảng Trị",
    icon: UserRoundCheck,
    tone: "green",
  },
  {
    title: "Xe sạch, đi êm",
    description: "Ưu tiên xe điện khi lịch trình phù hợp",
    icon: Car,
    tone: "blue",
  },
  {
    title: "Báo giá trước",
    description: "Chốt giá theo chuyến, rõ chi phí chờ",
    icon: WalletCards,
    tone: "amber",
  },
  {
    title: "Zalo/SĐT nhanh",
    description: "Gọi lại nhanh để chốt giờ và xe",
    icon: Headphones,
    tone: "slate",
  },
];

export const bookingSteps: ProcessStep[] = [
  {
    title: "Nhập thông tin",
    description: "Nhập điểm đón, điểm đến, ngày giờ và số khách",
    icon: Route,
  },
  {
    title: "Xác nhận yêu cầu",
    description: "Chúng tôi liên hệ xác nhận và báo giá",
    icon: CalendarCheck2,
  },
  {
    title: "Xác nhận chuyến đi",
    description: "Bạn đồng ý, chúng tôi sắp xếp xe",
    icon: BadgeCheck,
  },
  {
    title: "Bắt đầu hành trình",
    description: "Tài xế đón tận nơi, bạn tận hưởng chuyến đi",
    icon: Sparkles,
  },
];

export const formSupportItems = [
  { label: "Báo giá theo chuyến", icon: BadgeCheck },
  { label: "Linh hoạt giờ đón", icon: RefreshCw },
  { label: "Đón trả tận nơi", icon: ShieldCheck },
];
