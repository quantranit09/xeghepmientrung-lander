import Image from "next/image";
import { site } from "@/lib/site";

export function BrandLogo() {
  return (
    <span className="brand-logo" role="img" aria-label={site.name}>
      <Image
        className="brand-logo__image"
        src="/assets/bao-trang/logo-full.webp"
        alt=""
        width={768}
        height={305}
        sizes="(max-width: 760px) 138px, 244px"
      />
    </span>
  );
}
