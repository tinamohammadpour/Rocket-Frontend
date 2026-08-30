'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const video = videoRef.current;

      if (!section || !video) return;

      let tween: gsap.core.Tween | null = null;

      const initScrollVideo = () => {
        const duration = Math.max(video.duration - 0.04, 0);

        video.pause();
        video.currentTime = 0;

        tween?.kill();

        tween = gsap.to(video, {
          currentTime: duration,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=220%',
            scrub: 0.7,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        ScrollTrigger.refresh();
      };

      if (video.readyState >= 1) {
        initScrollVideo();
      } else {
        video.addEventListener('loadedmetadata', initScrollVideo, { once: true });
      }

      return () => {
        video.removeEventListener('loadedmetadata', initScrollVideo);

        const scrollTrigger = (
          tween as (gsap.core.Tween & { scrollTrigger?: ScrollTrigger }) | null
        )?.scrollTrigger;

        scrollTrigger?.kill();
        tween?.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#111827]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
        muted
        playsInline
        preload="auto"
        poster="/images/landing/padel-swing.png"
      >
        <source src="/videos/landing/padel-swing.webm" type="video/webm" />
        <source src="/videos/landing/padel-swing-scroll.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-[1] bg-gradient-to-l from-[#1F2937]/10 via-[#1F2937]/60 to-[#1F2937]/95" />

      <div
        dir="rtl"
        className="relative z-10 h-full max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-end"
      >
        <div className="max-w-lg text-right">
          <span className="inline-block text-xs font-medium text-[#84CC16] bg-[#84CC16]/10 px-3 py-1 rounded-full mb-6">
            رزرو زمین پدل
          </span>

          <h1 className="text-white font-bold text-[clamp(1.8rem,5vw,3.2rem)] leading-[1.3] mb-6">
            هر ضربه، یک بازی
            <br />
            بدون دغدغه‌ی رزرو
          </h1>

          <p className="text-[#D1D5DB] text-base md:text-lg leading-8 mb-8">
            زمین موردعلاقه‌ت رو پیدا کن، آنلاین رزرو و پرداخت کن، و همون لحظه که پا به زمین گذاشتی،
            فقط به بازی فکر کن.
          </p>

          <Link
            href="/venues"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-[10px] bg-[#2563EB] text-white font-bold text-sm hover:opacity-90 transition-opacity"
          >
            <span>مشاهده‌ی مجموعه ها</span>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-1 text-white/70 z-10">
        <span className="text-xs">اسکرول کنید</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
