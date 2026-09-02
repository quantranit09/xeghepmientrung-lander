import type { ReactNode } from "react";
import Image from "next/image";
import { PageShell } from "@/components/landing/PageShell";
import { TripRequestForm } from "@/components/landing/TripRequestForm";
import { campaignPages } from "@/content/campaign-pages";
import { contentDates } from "@/content/dates";
import { journeys } from "@/data/landing";
import { site } from "@/lib/site";

export const articleLinks = [
  {
    href: "/bai-viet/dat-xe-rieng-da-nang-quang-tri",
    title: "Đặt xe riêng Đà Nẵng ⇄ Quảng Trị",
    description:
      "Cách hỏi xe theo điểm đón, điểm trả, giờ cần có mặt và số vali để chốt chuyến gọn hơn.",
  },
  {
    href: "/bai-viet/tim-xe-ghep-da-nang-quang-tri",
    title: "Đang tìm xe ghép Đà Nẵng ⇄ Quảng Trị?",
    description:
      "Khi nào nên đi ghép theo ghế, khi nào nên hỏi bao xe nếu đi nhóm hoặc cần trả đúng nhà.",
  },
  {
    href: "/bai-viet/thue-xe-da-nang-di-hai-lang",
    title: "Thuê xe Đà Nẵng đi Hải Lăng",
    description:
      "Lưu ý khi trả ở Diên Sanh, Mỹ Chánh, La Vang hoặc nhà riêng sâu hơn trung tâm.",
  },
  {
    href: "/bai-viet/xe-da-nang-di-dong-ha",
    title: "Xe Đà Nẵng đi Đông Hà",
    description:
      "Gợi ý cho chuyến công tác, khám bệnh, về quê hoặc đón sân bay rồi đi thẳng Đông Hà.",
  },
  {
    href: "/bai-viet/xe-san-bay-da-nang-di-quang-tri",
    title: "Xe sân bay Đà Nẵng đi Quảng Trị",
    description:
      "Cách chốt xe theo giờ bay, điểm đón sảnh, hành lý và điểm trả tại Hải Lăng, Đông Hà, La Vang, Lao Bảo.",
  },
  {
    href: "/bai-viet/xe-da-nang-di-la-vang",
    title: "Xe Đà Nẵng đi La Vang",
    description:
      "Chuẩn bị chuyến đi lễ La Vang bằng xe riêng, có thể ghé Huế, Hải Lăng hoặc Thành cổ Quảng Trị.",
  },
  {
    href: "/bai-viet/xe-da-nang-di-lao-bao",
    title: "Xe Đà Nẵng đi Lao Bảo",
    description:
      "Lưu ý cho chặng xa đi Lao Bảo, Hướng Hóa: giờ đi, điểm dừng, hành lý và loại xe phù hợp.",
  },
  {
    href: "/bai-viet/dat-xe-rieng-da-nang-quang-binh",
    title: "Đặt xe riêng Đà Nẵng ⇄ Quảng Bình",
    description:
      "Chặng dài hơn, nên tính điểm nghỉ, số vali và giờ cần đến Đồng Hới/Lệ Thủy.",
  },
  {
    href: "/bai-viet/transfer-da-nang-hue",
    title: "Transfer Đà Nẵng ⇄ Huế",
    description:
      "Đón sân bay, khách sạn, đi trong ngày hoặc ghé điểm trước khi ra Quảng Trị.",
  },
  {
    href: "/bai-viet/kinh-nghiem-thue-xe-rieng-mien-trung",
    title: "Kinh nghiệm thuê xe riêng Đà Nẵng ⇄ Quảng Trị",
    description:
      "Những điểm cần chốt trước khi đi: loại xe, hành trình, phụ phí và thông tin tài xế.",
  },
  {
    href: "/bai-viet/meo-dat-xe-hop-dong-tiet-kiem",
    title: "Mẹo đặt xe hợp đồng tiết kiệm khi đi liên tỉnh",
    description:
      "Cách gom điểm đón, điểm ghé, giờ chờ và hành lý để báo giá ít bị đổi sau.",
  },
  {
    href: "/bai-viet/so-sanh-xe-khach-va-xe-rieng",
    title: "So sánh xe khách và xe riêng",
    description:
      "Khi nào nên chọn xe khách, khi nào nên thuê xe riêng 4 chỗ, 5 chỗ hoặc 7 chỗ.",
  },
  {
    href: "/bai-viet/thue-xe-rieng-an-toan-cho-gia-dinh",
    title: "Thuê xe riêng an toàn cho gia đình",
    description:
      "Lưu ý khi đi cùng trẻ em, người lớn tuổi, hành lý nhiều hoặc lịch trình linh hoạt.",
  },
];

export function ArticleShell({
  title,
  summary,
  children,
}: {
  title: string;
  summary: string;
  children: ReactNode;
}) {
  const heroJourney = journeys[0];

  return (
    <PageShell>
      <main>
        <section className="article-hero">
          <div className="site-container article-hero__inner">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <a href="/">Trang chủ</a>
              <span>/</span>
              <a href="/bai-viet">Hướng dẫn</a>
            </nav>
            <h1>{title}</h1>
            <div className="article-meta" aria-label="Thông tin bài viết">
              <span>Bởi {site.operatorName}</span>
              <span>Xuất bản {contentDates.publishedLabel}</span>
              <span>Cập nhật {contentDates.modifiedLabel}</span>
            </div>
            <p>{summary}</p>
          </div>
        </section>
        <section className="article-section">
          <div className="site-container article-layout">
            <article className="article-panel">
              <div className="article-image">
                <Image
                  src={heroJourney.image}
                  alt="Xe riêng Đà Nẵng - Quảng Trị"
                  fill
                  sizes="(max-width: 768px) 100vw, 760px"
                />
              </div>
              <div className="article-body">{children}</div>
            </article>
            <aside className="article-aside">
              <h2>Nhận giá chuyến đi</h2>
              <p>Gửi điểm đón, điểm trả, giờ đi và số vali để Bảo Trang kiểm tra xe còn lịch.</p>
              <a className="btn btn-primary" href={campaignPages.contact.route}>
                Về form nhận giá
              </a>
            </aside>
          </div>
        </section>
        <section className="trip-request-section">
          <div className="site-container">
            <TripRequestForm />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
