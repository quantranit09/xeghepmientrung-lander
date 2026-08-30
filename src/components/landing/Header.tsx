"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/landing";
import { site } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";

export function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href);

  return (
    <header className="site-header">
      <div className="site-container nav-shell">
        <Link href="/" className="brand-link" aria-label={site.name}>
          <BrandLogo />
        </Link>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {navigationItems.map((item) => (
            <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="desktop-actions">
          <a className="phone-pill" href={site.phoneHref}>
            <Phone size={18} aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <a className="round-call" href={site.phoneHref} aria-label={`Gọi ${site.phoneDisplay}`}>
            <Phone size={20} aria-hidden="true" />
          </a>
        </div>

        <div className="mobile-actions">
          <Dialog.Root>
            <Dialog.Trigger className="icon-button" aria-label="Mở menu">
              <Menu size={22} aria-hidden="true" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="dialog-overlay" />
              <Dialog.Content className="mobile-menu">
                <div className="mobile-menu__header">
                  <BrandLogo />
                  <Dialog.Close className="icon-button" aria-label="Đóng menu">
                    <X size={20} aria-hidden="true" />
                  </Dialog.Close>
                </div>
                <Dialog.Title className="sr-only">Menu điều hướng</Dialog.Title>
                <nav aria-label="Điều hướng di động">
                  {navigationItems.map((item) => (
                    <Dialog.Close asChild key={item.href}>
                      <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                        {item.label}
                      </Link>
                    </Dialog.Close>
                  ))}
                </nav>
                <a className="btn btn-primary" href={site.phoneHref}>
                  Gọi {site.phoneDisplay}
                </a>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          <a className="round-call" href={site.phoneHref} aria-label={`Gọi ${site.phoneDisplay}`}>
            <Phone size={19} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
