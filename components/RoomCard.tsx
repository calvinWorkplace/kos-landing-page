"use client";

import Image from "next/image";
import { BedDouble, Ruler, CheckCircle2, MessageCircle } from "lucide-react";
import type { Room } from "@/data/rooms";
import { WA_NUMBER } from "@/data/rooms";
import { useLanguage } from "@/lib/LanguageContext";

type Props = { room: Room };

export default function RoomCard({ room }: Props) {
  const { t, r } = useLanguage();

  const isAvailable = room.status === "available";
  const statusLabel = isAvailable ? t.rooms.statusAvailable : t.rooms.statusFull;
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(room.whatsappMessage)}`;

  return (
    <article className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">

      {/* Image */}
      <div className="relative h-52 sm:h-56 overflow-hidden">
        <Image
          src={room.image}
          alt={`${r(room.title)} — ${r(room.subtitle)}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-md ${
              isAvailable ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isAvailable ? "bg-emerald-200" : "bg-red-200"}`} />
            {statusLabel}
          </span>
        </div>
        {/* Price overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-8 pb-3">
          <p className="text-white font-extrabold text-xl leading-none">
            {room.price}
            <span className="text-white/70 text-sm font-normal ml-1">{t.rooms.priceNote}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-extrabold text-gray-800 dark:text-slate-100 text-lg leading-snug">
            {r(room.title)}
          </h3>
          <p className="text-primary dark:text-primary-muted text-sm font-medium mt-0.5">
            {r(room.subtitle)}
          </p>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4 text-gray-500 dark:text-slate-400 text-xs mb-3">
          <span className="flex items-center gap-1">
            <BedDouble className="w-3.5 h-3.5" />
            {t.rooms.roomLabel}
          </span>
          <span className="flex items-center gap-1">
            <Ruler className="w-3.5 h-3.5" />
            {room.size}
          </span>
        </div>

        <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {r(room.description)}
        </p>

        {/* Facilities */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {room.facilities.map((f, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary-light dark:bg-primary/20 text-primary dark:text-primary-muted text-xs font-medium rounded-lg"
            >
              <CheckCircle2 className="w-3 h-3" />
              {r(f)}
            </span>
          ))}
        </div>

        {/* CTA */}
        {isAvailable ? (
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-dark transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            {t.rooms.bookWa}
          </a>
        ) : (
          <button
            disabled
            className="inline-flex items-center justify-center gap-2 w-full py-3 bg-gray-100 dark:bg-slate-700 text-gray-400 dark:text-slate-500 text-sm font-bold rounded-xl cursor-not-allowed"
          >
            {t.rooms.fullBtn}
          </button>
        )}
      </div>
    </article>
  );
}
