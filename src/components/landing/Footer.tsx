import Link from "next/link";
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
          <span>Đà Nẵng, Việt Nam</span>
        </div>
        <div className="footer-links">
          <h3>Dịch vụ</h3>
          <Link href="/#gia">Bảng giá tham khảo</Link>
          <Link href="/#yeu-cau-chuyen-di">Xe riêng theo chuyến</Link>
          <Link href="/#hanh-trinh">Khu vực phục vụ</Link>
          <Link href="/#dich-vu">Dòng xe phục vụ</Link>
        </div>
        <div className="footer-links">
          <h3>Hướng dẫn</h3>
          <Link href="/bai-viet">Hướng dẫn đặt xe</Link>
          <Link href="/privacy">Chính sách</Link>
          <Link href="/#vi-sao">Câu hỏi thường gặp</Link>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© 2026 {site.name}. Xe riêng / xe hợp đồng / transfer theo chuyến.</span>
      </div>
    </footer>
  );
}
