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
            priority
            sizes="100vw"
          />
          <div className="hero-wash" aria-hidden="true" />
          <div className="site-container hero-layout">
            <div className="hero-copy">
              <h1>
                <span>Xe Đà Nẵng ⇄ Quảng Trị</span>
                <strong>Đi riêng theo chuyến</strong>
              </h1>
              <p className="hero-copy__desktop">Đón trả tận nơi · Xe 4, 5, 7 chỗ · Có xe 16 chỗ khi cần</p>
              <p className="hero-copy__mobile">Xe riêng 4, 5, 7 chỗ · Báo giá theo chuyến</p>
            </div>
          </div>

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

        <section id="hanh-trinh" className="content-section">
          <div className="site-container section-heading-row motion-reveal">
            <div>
              <span className="section-kicker section-kicker--journey">
                <Route size={22} aria-hidden="true" />
                Khu vực phục vụ
              </span>
              <h2>Các điểm đón/trả thường được yêu cầu</h2>
            </div>
            <a href="/bai-viet" className="section-link">
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
                  <a href="#yeu-cau-chuyen-di">
                    Xem chi tiết
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="site-container center-action">
            <a className="btn btn-outline" href="/bai-viet">
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
              <h2>Cho xe riêng / xe hợp đồng, đón trả tận nơi</h2>
            </div>
            <a href="#yeu-cau-chuyen-di" className="section-link">
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
            Giá áp dụng theo chuyến xe riêng / xe hợp đồng, xác nhận lại theo loại xe, giờ đi và điểm đón trả cụ thể.
          </p>
        </section>

        <section id="dich-vu" className="content-section content-section--soft">
          <div className="site-container section-heading-row motion-reveal">
            <div>
              <span className="section-kicker section-kicker--fleet">
                <Car size={22} aria-hidden="true" />
                Dòng xe phục vụ
              </span>
              <h2>Xe đời mới, sạch sẽ, tiện nghi</h2>
            </div>
            <a href="#yeu-cau-chuyen-di" className="section-link">
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
            <a className="btn btn-outline" href="#yeu-cau-chuyen-di">
              Xem tất cả dòng xe
            </a>
          </div>
        </section>

        <section id="vi-sao" className="content-section">
          <div className="site-container section-heading-row motion-reveal">
            <div>
              <span className="section-kicker section-kicker--plain">Vì sao chọn chúng tôi?</span>
              <h2>Vì sao chọn {site.name}?</h2>
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
              <h2>Đặt xe chỉ với 4 bước đơn giản</h2>
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
              <p>Gửi điểm đón trả, {site.operatorName} sẽ tư vấn loại xe và báo giá theo chuyến.</p>
            </div>
            <a className="btn btn-primary" href="#yeu-cau-chuyen-di">
              Nhận giá chuyến đi
            </a>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
