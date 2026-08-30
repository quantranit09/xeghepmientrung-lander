import Link from "next/link";
import { campaignPages } from "@/content/campaign-pages";
import { site } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <BrandLogo />
          <p>Xe riêng, xe hợp đồng và transfer 4, 5, 7 chỗ tại Đà Nẵng, Quảng Trị, Quảng Bình. Có xe 16 chỗ cho nhóm đông.</p>
        </div>
        <div className="footer-contact">
          <h3>Liên hệ</h3>
          <a className="footer-contact-link" href={site.phoneHref}>{site.phoneDisplay}</a>
          <a className="footer-contact-link" href={site.zaloUrl} target="_blank" rel="nofollow noopener">Zalo: {site.phoneDisplay}</a>
          <a className="footer-contact-link" href={`mailto:${site.email}`}>{site.email}</a>
          <a className="footer-contact-link" href={site.facebookUrl} target="_blank" rel="nofollow noopener">Facebook</a>
          <span>Đà Nẵng, Việt Nam</span>
        </div>
        <div className="footer-links">
          <h3>Dịch vụ</h3>
          <Link href={campaignPages.xeRieng.route}>Xe riêng theo chuyến</Link>
          <Link href={campaignPages.xeGhep.route}>Xe ghép / tư vấn phương án</Link>
          <Link href={campaignPages.pricing.route}>Bảng giá tham khảo</Link>
          <Link href={campaignPages.serviceArea.route}>Khu vực phục vụ</Link>
        </div>
        <div className="footer-links">
          <h3>Hướng dẫn</h3>
          <Link href="/bai-viet">Hướng dẫn đặt xe</Link>
          <Link href={campaignPages.fleet.route}>Dòng xe phục vụ</Link>
          <Link href={campaignPages.contact.route}>Liên hệ đặt xe</Link>
          <Link href="/privacy">Chính sách</Link>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© 2026 {site.name}. Xe riêng / xe hợp đồng / transfer theo chuyến.</span>
      </div>
    </footer>
  );
}
