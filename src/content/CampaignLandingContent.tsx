import {
  ArrowRight,
  Car,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TripRequestForm } from "@/components/landing/TripRequestForm";
import { VehicleCard } from "@/components/landing/VehicleCard";
import { journeys, routePrices, vehicles } from "@/data/landing";
import { site } from "@/lib/site";
import { PageShell } from "@/components/landing/PageShell";
import { campaignPages, type CampaignPage } from "./campaign-pages";

function CampaignShowcase({ page }: { page: CampaignPage }) {
  if (page.id === "serviceArea") {
    return (
      <section className="campaign-section">
        <div className="site-container section-heading-row">
          <div>
            <span className="section-kicker">
              <MapPin size={22} aria-hidden="true" />
              Điểm đón/trả nổi bật
            </span>
            <h2>Các chặng khách thường hỏi trước khi đặt xe</h2>
          </div>
          <Link className="section-link" href={campaignPages.pricing.route}>
            Xem giá
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <div className="site-container journey-grid">
          {journeys.map((journey) => (
            <article className="journey-card" key={journey.id}>
              <div className="journey-card__body">
                <h3>
                  <span>{journey.from}</span>
                  <b>⇄</b>
                  <span>{journey.to}</span>
                </h3>
                <p>{journey.description}</p>
              </div>
              <div className="journey-card__image">
                <Image
                  src={journey.image}
                  alt={`${journey.from} đến ${journey.to}`}
                  fill
                  sizes="(max-width: 768px) 64px, 25vw"
                />
              </div>
              <div className="journey-card__footer">
                <span>{journey.estimate}</span>
                <Link href={journey.guideHref ?? campaignPages.contact.route}>
                  Xem chi tiết
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (page.id === "fleet") {
    return (
      <section className="campaign-section">
        <div className="site-container section-heading-row">
          <div>
            <span className="section-kicker section-kicker--fleet">
              <Car size={22} aria-hidden="true" />
              Xe đang phục vụ
            </span>
          <h2>Chọn xe theo số khách, hành lý và lịch trình</h2>
          </div>
          <Link className="section-link" href={campaignPages.pricing.route}>
            Xem giá
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <div className="site-container vehicle-grid">
          {vehicles.map((vehicle) => (
            <VehicleCard vehicle={vehicle} key={vehicle.id} />
          ))}
        </div>
      </section>
    );
  }

  if (page.id === "contact") {
    return (
      <section className="campaign-section">
        <div className="site-container campaign-contact-grid">
          <a className="campaign-contact-card" href={site.phoneHref}>
            <Phone size={22} aria-hidden="true" />
            <span>Gọi hotline</span>
            <strong>{site.phoneDisplay}</strong>
          </a>
          <a className="campaign-contact-card" href={site.zaloUrl} target="_blank" rel="nofollow noopener">
            <MessageCircle size={22} aria-hidden="true" />
            <span>Nhắn Zalo</span>
            <strong>{site.phoneDisplay}</strong>
          </a>
          <a className="campaign-contact-card" href={`mailto:${site.email}`}>
            <Mail size={22} aria-hidden="true" />
            <span>Email</span>
            <strong>{site.email}</strong>
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="campaign-section">
      <div className="site-container section-heading-row">
        <div>
          <span className="section-kicker section-kicker--price">
            <WalletCards size={22} aria-hidden="true" />
            {page.id === "pricing" ? "Bảng giá tham khảo" : "Giá tuyến phổ biến"}
          </span>
          <h2>Giá cần chốt lại theo điểm trả cuối và điều kiện chuyến</h2>
        </div>
        {page.id === "pricing" ? (
          <Link className="section-link" href={campaignPages.fleet.route}>
            Chọn xe
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        ) : (
          <Link className="section-link" href={campaignPages.pricing.route}>
            Xem bảng giá
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        )}
      </div>
      <div className="site-container price-grid">
        {(page.id === "pricing" ? routePrices : routePrices.slice(0, 4)).map((item) => (
          <article className="price-card" key={item.id}>
            <span>{item.route}</span>
            <strong>{item.price}</strong>
          </article>
        ))}
      </div>
      <p className="site-container price-note">
        Giá chỉ là khung tham khảo cho xe riêng / bao chuyến. Hãy gửi điểm đón, điểm trả, giờ đi, số khách và vali để
        Bảo Trang kiểm tra chuyến thực tế.
      </p>
    </section>
  );
}

export function CampaignLandingContent({ page }: { page: CampaignPage }) {
  const relatedPages = Object.values(campaignPages).filter((item) => item.id !== page.id);
  const isXeGhepPage = page.id === "xeGhep";
  const xeGhepFormCopy = {
    title: "Kiểm tra xe ghép Đà Nẵng - Quảng Trị",
    description: "Gửi điểm đón/trả, giờ đi, số khách và vali để kiểm tra chuyến ghép hoặc giá bao xe.",
    submitLabel: "Hỏi chỗ / hỏi giá",
    serviceType: "Xe ghép Đà Nẵng - Quảng Trị",
    formName: "xe_ghep_trip_request",
    submittingMessage: "Đang gửi lịch trình, giữ máy một chút nhé.",
    successMessage: "Đã nhận lịch trình. Bảo Trang sẽ gọi lại qua SĐT/Zalo bạn vừa để lại.",
    dialogTitle: "Đã nhận lịch trình",
    dialogDescription:
      "Bảo Trang sẽ gọi lại qua SĐT/Zalo để kiểm tra chỗ ghép, giờ đón hoặc phương án bao xe phù hợp hơn.",
  };

  return (
    <PageShell>
      <main>
        <section className="campaign-hero">
          <div className="site-container campaign-hero__grid">
            <div className="campaign-hero__copy">
              <nav aria-label="Breadcrumb" className="breadcrumb">
                <Link href="/">Trang chủ</Link>
                <span>/</span>
                <span>{page.navLabel}</span>
              </nav>
              <span className="section-kicker">{page.kicker}</span>
              <h1>{page.headline}</h1>
              <p>{page.summary}</p>
              <div className="campaign-actions">
                <a className="btn btn-primary" href="#yeu-cau-chuyen-di">
                  {isXeGhepPage ? "Kiểm tra xe ghép" : "Nhận báo giá"}
                </a>
                <a className="btn btn-outline" href={site.phoneHref}>
                  <Phone size={17} aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
            <div className={`campaign-hero__media campaign-hero__media--${page.id}`}>
              <Image
                src={page.heroImage}
                alt={page.heroAlt}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 760px) 100vw, 38vw"
              />
            </div>
          </div>
        </section>

        {isXeGhepPage ? (
          <section className="trip-request-section trip-request-section--campaign-top">
            <div className="site-container">
              <TripRequestForm {...xeGhepFormCopy} />
            </div>
          </section>
        ) : null}

        <section className="campaign-section campaign-section--facts">
          <div className="site-container campaign-facts">
            {page.facts.map((fact) => (
              <article className="campaign-fact" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="campaign-section campaign-section--soft">
          <div className="site-container campaign-copy-grid">
            <article className="campaign-panel campaign-panel--answer">
              <h2>{page.answerTitle}</h2>
              <p>{page.answer}</p>
            </article>
            <article className="campaign-panel">
              <h2>{page.detailsTitle}</h2>
              <ul className="campaign-list">
                {page.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="campaign-section">
          <div className="site-container campaign-copy-grid">
            <article className="campaign-panel">
              <h2>{page.planningTitle}</h2>
              <ul className="campaign-list">
                {page.planning.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <div className="campaign-section-stack">
              {page.sections.map((section) => (
                <article className="campaign-panel campaign-panel--compact" key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CampaignShowcase page={page} />

        {page.id !== "fleet" ? (
          <section className="campaign-section campaign-section--soft">
            <div className="site-container campaign-related">
              {relatedPages.slice(0, 4).map((item) => (
                <Link className="guide-card" href={item.route} key={item.id}>
                  <h3>{item.navLabel}</h3>
                  <p>{item.llmsDescription}</p>
                  <span>
                    Xem trang
                    <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {!isXeGhepPage ? (
          <section className="trip-request-section">
            <div className="site-container">
              <TripRequestForm />
            </div>
          </section>
        ) : null}
      </main>
    </PageShell>
  );
}
