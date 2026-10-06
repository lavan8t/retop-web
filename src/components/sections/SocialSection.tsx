"use client";

import { socialCopy } from "@/content/copy";

export default function SocialSection() {
  return (
    <section
      className="relative w-full max-w-6xl px-4 sm:px-6 md:px-12 py-16 md:py-32 z-20"
    >
      <div className="social-content flex flex-col items-center text-center gap-8 sm:gap-10">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-title-base text-3xl sm:text-4xl md:text-5xl text-(--text-main) leading-none max-w-3xl">
            {socialCopy.heading}
          </h2>
          <p className="text-(--text-muted) text-base sm:text-lg leading-relaxed font-medium max-w-xl">
            {socialCopy.description}
          </p>
        </div>

        {/* Testimonial */}
        <div className="bg-(--bg-card) border border-(--border-subtle) rounded-2xl p-5 sm:p-8 md:p-10 max-w-2xl text-left w-full flex flex-col gap-6 sm:gap-8 shadow-sm">
          <p className="text-(--text-main) text-lg sm:text-xl md:text-2xl font-medium leading-relaxed ">
            &ldquo;{socialCopy.quote}&rdquo;
          </p>
          <div className="flex flex-col gap-0.5">
            <div className="text-base text-(--text-main) font-bold">{socialCopy.quoteAuthor}</div>
            <div className="text-sm text-(--text-muted) font-medium">
              {socialCopy.quoteContext}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
