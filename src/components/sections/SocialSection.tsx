"use client";



export default function SocialSection() {
  return (
    <section
      className="relative w-full max-w-6xl px-6 md:px-12 py-32 z-20"
    >
      <div className="social-content flex flex-col items-center text-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-title-base text-[clamp(2rem,5vw,4rem)] text-(--text-main) leading-none tracking-tighter max-w-3xl">
            Made by a VIT student who got tired of VTOP.
          </h2>
          <p className="text-(--text-muted) text-base leading-relaxed font-medium max-w-xl">
            Not a startup. Not a team of engineers with a pitch deck. Just
            someone who opened VTOP one too many times and decided to fix it.
            Open source the code is public, no hidden tracking.
          </p>
        </div>



        {/* Testimonial */}
        <div className="bg-(--bg-card) border border-(--border-subtle) rounded-2xl p-8 md:p-10 max-w-2xl text-left w-full flex flex-col gap-8 shadow-sm">
          <p className="text-(--text-main) text-xl md:text-2xl font-medium leading-relaxed tracking-tight">
            &ldquo;I genuinely forgot VTOP was ugly until I had to use it on
            someone else&apos;s laptop.&rdquo;
          </p>
          <div className="flex flex-col gap-0.5">
            <div className="text-base text-(--text-main) font-bold">VIT Student</div>
            <div className="text-sm text-(--text-muted) font-medium">
              3rd Year, CSE · Chennai Campus
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
