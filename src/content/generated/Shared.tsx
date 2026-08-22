import type { ReactNode } from "react";
import Image from "next/image";
import { PageShell } from "@/components/landing/PageShell";
import { TripRequestForm } from "@/components/landing/TripRequestForm";
import { journeys } from "@/data/landing";

export const articleLinks = [
  {
    href: "/bai-viet/dat-xe-rieng-da-nang-quang-tri",
    title: "Đặt xe riêng Đà Nẵng ⇄ Quảng Trị",
    description:
      "Kinh nghiệm chọn xe 4 chỗ, 5 chỗ, 7 chỗ theo chuyến, điểm đón trả và thời gian di chuyển.",
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
    title: "Mẹo đặt xe hợp đồng tiết kiệm",
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
              <a className="btn btn-primary" href="/#yeu-cau-chuyen-di">
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
