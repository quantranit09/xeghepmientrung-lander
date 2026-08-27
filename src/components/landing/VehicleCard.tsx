"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Check, Leaf, Users, X } from "lucide-react";
import Image from "next/image";
import type { Vehicle } from "@/data/landing";

export function VehicleCard({ vehicle, className = "" }: { vehicle: Vehicle; className?: string }) {
  const chooseVehicle = () => {
    window.dispatchEvent(
      new CustomEvent("bao-trang:select-vehicle", {
        detail: vehicle.id === "vf6" ? "Xe điện 5 chỗ" : `Xe ${vehicle.capacity} chỗ`,
      }),
    );
  };

  return (
    <article className={`vehicle-card vehicle-card--${vehicle.id} ${className}`.trim()}>
      {vehicle.badge ? <span className="vehicle-badge">{vehicle.badge}</span> : null}
      <div className="vehicle-image">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          sizes="(max-width: 768px) 80px, 25vw"
        />
      </div>
      <div className="vehicle-card__body">
        <h3>{vehicle.name}</h3>
        <div className="vehicle-tags">
          <span>
            <Users size={14} aria-hidden="true" />
            {vehicle.capacity} chỗ
          </span>
          {vehicle.tags.map((tag) => (
            <span key={tag}>
              {tag === "Không khí thải" ? <Leaf size={14} aria-hidden="true" /> : <Check size={14} aria-hidden="true" />}
              {tag}
            </span>
          ))}
        </div>
        {vehicle.id === "vf6" ? (
          <p className="green-note">Thân thiện môi trường</p>
        ) : null}
        <Dialog.Root>
          <Dialog.Trigger className="vehicle-link">
            Xem chi tiết
            <ArrowRight size={15} aria-hidden="true" />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="dialog-overlay" />
            <Dialog.Content className="vehicle-dialog">
              <Dialog.Close className="dialog-close" aria-label="Đóng">
                <X size={18} aria-hidden="true" />
              </Dialog.Close>
              <Dialog.Title>{vehicle.name}</Dialog.Title>
              <Dialog.Description>{vehicle.suitableFor}</Dialog.Description>
              <ul>
                {vehicle.highlights.map((highlight) => (
                  <li key={highlight}>
                    <Check size={16} aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <Dialog.Close asChild>
                <button className="btn btn-primary" type="button" onClick={chooseVehicle}>
                  Chọn xe này
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </article>
  );
}
