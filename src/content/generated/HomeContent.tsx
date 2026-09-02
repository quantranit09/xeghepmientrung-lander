import {
  ArrowRight,
  Car,
  ChevronRight,
  Route,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import { PageShell } from "@/components/landing/PageShell";
import { TripRequestForm } from "@/components/landing/TripRequestForm";
import { VehicleCard } from "@/components/landing/VehicleCard";
import { campaignPages } from "@/content/campaign-pages";
import {
  bookingSteps,
  heroBenefits,
  journeys,
  routePrices,
  vehicles,
  whyChooseUs,
} from "@/data/landing";
import { site } from "@/lib/site";

export function HomeContent() {
  return (
    <PageShell>
      <main>
        <section className="hero-section">
          <Image
            className="hero-background"
            src="/assets/bao-trang/hero-dragon-bridge-transfer.webp"
            alt="Xe riêng Đà Nẵng - Quảng Trị"
            fill
            preload
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="hero-wash" aria-hidden="true" />
          <div className="site-container hero-layout">
            <div className="hero-copy">
              <h1>
                <span>Xe Đà Nẵng ⇄ Quảng Trị</span>
                <strong>Đón tận nơi, đi theo lịch của bạn</strong>
              </h1>
              <p className="hero-copy__desktop">
                Sân bay, khách sạn, nhà riêng · Về Hải Lăng, Đông Hà, La Vang, Lao Bảo
              </p>
              <p className="hero-copy__mobile">Xe riêng 4, 5, 7 chỗ · Đón sân bay, trả tận nơi</p>
            </div>
          </div>

          <h2 className="sr-only">Lợi ích chính khi đặt xe</h2>
          <div className="site-container benefit-strip">
            {heroBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article className={`benefit-card benefit-card--${benefit.tone}`} key={benefit.title}>
                  <span>
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="trip-request-section motion-reveal">
          <div className="site-container">
            <TripRequestForm />
          </div>
        </section>

        <section className="geo-answer-section">
          <div className="site-container geo-answer">
            <div>
              <span className="section-kicker section-kicker--plain">Tóm tắt dịch vụ</span>
              <h2>Bảo Trang Transport cung cấp dịch vụ gì?</h2>
              <p>
                Bảo Trang Transport nhận xe riêng, xe hợp đồng và transfer theo chuyến từ Đà Nẵng về Quảng Trị. Khách
                thường hỏi các điểm như Hải Lăng, Đông Hà, La Vang, Lao Bảo, hoặc ghé thêm Huế, Quảng Bình. Bạn chỉ cần
                gửi nơi đón, nơi trả, giờ cần đi hoặc giờ cần có mặt, số khách và vali; Bảo Trang sẽ nhắc loại xe nên
                đi và báo giá trước khi giữ chuyến.
              </p>
            </div>
            <dl className="geo-facts">
              <div>
                <dt>Nhận chuyến</dt>
                <dd>Xe riêng / bao xe / transfer</dd>
              </div>
              <div>
                <dt>Tuyến thường hỏi</dt>
                <dd>Đà Nẵng ⇄ Quảng Trị</dd>
              </div>
              <div>
                <dt>Hỏi giá nhanh</dt>
                <dd>{site.phoneDisplay} hoặc Zalo</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="hanh-trinh" className="content-section">
          <div className="site-container section-heading-row motion-reveal">
            <div>
              <span className="section-kicker section-kicker--journey">
                <Route size={22} aria-hidden="true" />
                Khu vực phục vụ
              </span>
              <h2>Các điểm đón/trả thường được yêu cầu</h2>
            </div>
            <a href={campaignPages.serviceArea.route} className="section-link">
              Xem tất cả
              <ChevronRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="site-container journey-grid">
            {journeys.map((journey) => (
              <article className="journey-card motion-reveal" key={journey.id}>
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
                  <a href={journey.guideHref ?? "#yeu-cau-chuyen-di"}>
                    Xem chi tiết
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="site-container center-action">
            <a className="btn btn-outline" href={campaignPages.serviceArea.route}>
              Xem thêm điểm đón/trả
            </a>
          </div>
        </section>

        <section id="gia" className="content-section content-section--prices">
          <div className="site-container section-heading-row motion-reveal">
            <div>
              <span className="section-kicker section-kicker--price">
                <WalletCards size={22} aria-hidden="true" />
                Giá tham khảo
              </span>
              <h2>Khung giá để bạn áng trước khi gọi</h2>
            </div>
            <a href={campaignPages.contact.route} className="section-link">
              Nhận báo giá
              <ChevronRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="site-container price-grid">
            {routePrices.map((item) => (
              <article className="price-card motion-reveal" key={item.id}>
                <span>{item.route}</span>
                <strong>{item.price}</strong>
              </article>
            ))}
          </div>
          <p className="site-container price-note">
            Giá áp dụng cho xe riêng / xe hợp đồng. Điểm trả xa, đi sáng sớm, chờ lâu hoặc ghé thêm điểm sẽ cần xác
            nhận lại trước chuyến.
          </p>
        </section>

        <section id="dich-vu" className="content-section content-section--soft">
          <div className="site-container section-heading-row motion-reveal">
            <div>
              <span className="section-kicker section-kicker--fleet">
                <Car size={22} aria-hidden="true" />
                Dòng xe phục vụ
              </span>
              <h2>Chọn xe theo số khách và số vali</h2>
            </div>
            <a href={campaignPages.fleet.route} className="section-link">
              Xem tất cả
              <ChevronRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="site-container vehicle-grid">
            {vehicles.map((vehicle) => (
              <VehicleCard vehicle={vehicle} className="motion-reveal" key={vehicle.id} />
            ))}
          </div>
          <div className="site-container center-action">
            <a className="btn btn-outline" href={campaignPages.fleet.route}>
              Xem tất cả dòng xe
            </a>
          </div>
        </section>

        <section id="vi-sao" className="content-section">
          <div className="site-container section-heading-row motion-reveal">
            <div>
              <span className="section-kicker section-kicker--plain">Vì sao chọn chúng tôi?</span>
              <h2>Vì sao khách chọn {site.shortName}?</h2>
            </div>
          </div>
          <div className="site-container why-grid">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <article className="why-card motion-reveal" key={item.title}>
                  <span>
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="content-section content-section--steps">
          <div className="site-container section-heading-row motion-reveal">
            <div>
              <span className="section-kicker">Quy trình</span>
              <h2>Đặt xe không cần vòng vo</h2>
            </div>
          </div>
          <div className="site-container stepper">
            {bookingSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className="step-card motion-reveal" key={step.title}>
                  <span className="step-card__number">{index + 1}</span>
                  <span className="step-card__icon">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {index < bookingSteps.length - 1 ? (
                    <ArrowRight className="step-arrow" size={18} aria-hidden="true" />
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>

        <section className="closing-cta motion-reveal">
          <div className="site-container closing-cta__inner">
            <div>
              <ShieldCheck size={28} aria-hidden="true" />
              <h2>Cần xe Đà Nẵng ⇄ Quảng Trị?</h2>
              <p>Gửi điểm đón, điểm trả, giờ đi và số vali; {site.shortName} sẽ kiểm tra xe còn lịch và báo giá.</p>
            </div>
            <a className="btn btn-primary" href={campaignPages.contact.route}>
              Nhận giá chuyến đi
            </a>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
