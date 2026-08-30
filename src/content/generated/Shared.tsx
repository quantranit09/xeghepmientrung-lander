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
      "Kinh nghiệm chọn xe 4 chỗ, 5 chỗ, 7 chỗ theo chuyến, điểm đón trả và thời gian di chuyển.",
  },
  {
    href: "/bai-viet/tim-xe-ghep-da-nang-quang-tri",
    title: "Đang tìm xe ghép Đà Nẵng ⇄ Quảng Trị?",
    description:
      "Gợi ý phương án xe riêng hoặc bao xe theo chuyến cho khách muốn tiết kiệm nhưng vẫn cần chủ động điểm đón trả.",
  },
  {
    href: "/bai-viet/thue-xe-da-nang-di-hai-lang",
    title: "Thuê xe Đà Nẵng đi Hải Lăng",
    description:
      "Tư vấn chặng Hải Lăng, Diên Sanh, Mỹ Chánh: loại xe, thời gian đi và thông tin cần gửi để nhận báo giá.",
  },
  {
    href: "/bai-viet/xe-da-nang-di-dong-ha",
    title: "Xe Đà Nẵng đi Đông Hà",
    description:
      "Gợi ý đặt xe riêng đi Đông Hà cho công tác, gia đình, đón sân bay và lịch trình cần đúng giờ.",
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
      "Gợi ý lịch trình transfer chặng dài, chuẩn bị hành lý và báo giá theo xe.",
  },
  {
    href: "/bai-viet/transfer-da-nang-hue",
    title: "Transfer Đà Nẵng ⇄ Huế",
    description:
      "Các lựa chọn đưa đón sân bay, khách sạn và lịch trình tham quan trong ngày.",
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
      "Cách gom lịch trình, chọn giờ đi và chuẩn bị thông tin để nhận báo giá tốt hơn.",
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
              <p>Gửi lịch trình để được tư vấn xe điện 5 chỗ, xe 7 chỗ hoặc xe phù hợp.</p>
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
