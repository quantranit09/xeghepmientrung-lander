"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    pushEvent?: (eventName: string, eventData?: Record<string, unknown>) => void;
    trackConversion?: (conversionType: string, transactionId?: string) => void;
  }
}

function pushEvent(eventName: string, eventData: Record<string, unknown> = {}) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...eventData });
    window.gtag?.("event", eventName, eventData);
  } catch (error) {
    console.error("Error tracking event:", error);
  }
}

function trackConversion(conversionType: string, transactionId = "") {
  const sendTo: Record<string, string> = {
    purchase: "AW-16682976859/kyfECNWsieEZENuMiJM-",
    contact: "AW-16682976859/JYXJCLGIhqQaENuMiJM-",
    zalo: "AW-16682976859/RP8eCLSIhqQaENuMiJM-",
    mail: "AW-16682976859/y6EqCNWIhqQaENuMiJM-",
    facebook: "AW-16682976859/ai7OCNiIhqQaENuMiJM-",
    booking: "AW-16682976859/K57LCNuIhqQaENuMiJM-",
  };

  try {
    const conversion = sendTo[conversionType];
    if (conversion) {
      window.gtag?.("event", "conversion", {
        send_to: conversion,
        transaction_id: transactionId || undefined,
      });
    } else {
      window.gtag?.("event", "conversion_event_contact", {});
    }
  } catch (error) {
    console.error("Error tracking conversion:", error);
  }
}

export function ClientBehaviors() {
  const pathname = usePathname();
  const trackedInitialPageView = useRef(false);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.pushEvent = pushEvent;
    window.trackConversion = trackConversion;
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      },
    );

    const revealElements = document.querySelectorAll(".motion-reveal");
    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, [pathname]);

  useEffect(() => {
    const dateInput = document.getElementById("date") as HTMLInputElement | null;
    if (dateInput) dateInput.min = new Date().toISOString().slice(0, 10);

    if (trackedInitialPageView.current) {
      pushEvent("page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_referrer: document.referrer,
      });
    } else {
      trackedInitialPageView.current = true;
    }
  }, [pathname]);

  useEffect(() => {
    const form = document.querySelector(".trip-form");
    if (!form || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        document.body.classList.toggle("trip-form-in-view", entry.isIntersecting);
      },
      {
        threshold: 0.08,
      },
    );

    observer.observe(form);

    return () => {
      observer.disconnect();
      document.body.classList.remove("trip-form-in-view");
    };
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest("a");
      if (!link) return;

      if (link.hostname && link.hostname !== window.location.hostname) {
        pushEvent("click_external_link", {
          link_url: link.href,
          link_text: link.textContent?.trim() || "",
        });
      }

      if (link.href.startsWith("tel:")) {
        pushEvent("phone_click", {
          phone_number: link.href.replace("tel:", ""),
          location:
            link.closest('[class*="header"], [class*="hero"], [class*="floating"], [class*="form"]')
              ?.className || "unknown",
        });
        trackConversion("contact");
      }

      if (link.href.includes("zalo.me")) {
        pushEvent("zalo_click", { link_url: link.href });
        trackConversion("zalo");
      }

      if (link.href.startsWith("mailto:")) {
        pushEvent("email_click", { email: link.href.replace("mailto:", "") });
        trackConversion("mail");
      }

      if (link.href.includes("facebook.com")) {
        pushEvent("facebook_click", { link_url: link.href });
        trackConversion("facebook");
      }

      if (link.classList.contains("price-tag") && link.href.startsWith("tel:")) {
        const routeName =
          link.closest(".card")?.querySelector("h3")?.textContent?.trim() ||
          "Unknown Route";
        pushEvent("call_click", {
          location: "route_pricing",
          route_name: routeName,
        });
      }
    };

    let maxScroll = 0;
    const onScroll = () => {
      const denominator = document.body.scrollHeight - window.innerHeight;
      if (denominator <= 0) return;
      const scrollPercentage = Math.round((window.scrollY / denominator) * 100);
      if (scrollPercentage > maxScroll && scrollPercentage % 25 === 0) {
        maxScroll = scrollPercentage;
        pushEvent("scroll_depth", { scroll_percentage: scrollPercentage });
      }
    };

    const startedAt = Date.now();
    const onBeforeUnload = () => {
      pushEvent("time_on_page", {
        seconds: Math.round((Date.now() - startedAt) / 1000),
      });
    };

    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, []);

  return null;
}
