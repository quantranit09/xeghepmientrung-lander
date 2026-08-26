import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingContact() {
  return (
    <div className="floating-contact" aria-label="Liên hệ nhanh">
      <a className="floating-contact__call" href={site.phoneHref} aria-label={`Gọi ${site.phoneDisplay}`}>
        <Phone size={22} aria-hidden="true" />
      </a>
      <a className="floating-contact__zalo" href={site.zaloUrl} target="_blank" rel="nofollow noopener" aria-label="Nhắn Zalo">
        <span className="zalo-icon" aria-hidden="true" />
      </a>
    </div>
  );
}
