"use client";

interface DashboardSectionProps {
  chromeStoreUrl: string;
}

export default function DashboardSection({
  chromeStoreUrl,
}: DashboardSectionProps) {
  return (
    <section className="relative w-full max-w-[95rem] px-8 md:px-16 lg:px-24 mx-auto pt-8 pb-32 flex flex-col gap-12 z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {/* Section 1 */}
        <div className="flex flex-col gap-3">
          <h3 className="font-title-base text-2xl md:text-3xl text-(--text-main) tracking-tight font-bold">
            No more digging around
          </h3>
          <p className="text-(--text-muted) text-base md:text-lg leading-relaxed font-medium">
            You know how annoying it is to click through five different menus just to find one thing on the original VTOP? We completely ditched that. Now, everything you care about is right there on one screen. And because your data is cached securely on your device, the dashboard loads instantly without a single loading spinner.
          </p>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col gap-3">
          <h3 className="font-title-base text-2xl md:text-3xl text-(--text-main) tracking-tight font-bold">
            Attendance at a glance
          </h3>
          <p className="text-(--text-muted) text-base md:text-lg leading-relaxed font-medium">
            On the left, we've got your attendance front and center. You get these clean little progress rings for each subject so you know exactly where you stand. Plus, we kept all the old quick links right there so you can still jump anywhere you need without the usual friction.
          </p>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col gap-3">
          <h3 className="font-title-base text-2xl md:text-3xl text-(--text-main) tracking-tight font-bold">
            The whole semester, mapped out
          </h3>
          <p className="text-(--text-muted) text-base md:text-lg leading-relaxed font-medium">
            The middle part is probably my favorite. We took the entire academic calendar and just baked it right into the dashboard. Holidays, exam weeks, random days off—it's all color-coded in this massive grid. You'll never have to hunt down that confusing university PDF ever again.
          </p>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col gap-3">
          <h3 className="font-title-base text-2xl md:text-3xl text-(--text-main) tracking-tight font-bold">
            Your day, synced and ready
          </h3>
          <p className="text-(--text-muted) text-base md:text-lg leading-relaxed font-medium">
            Over on the right is your action center. It permanently parks your CGPA, today's classes, and any upcoming assignments. The best part? It works flawlessly even when campus WiFi gives up. The cache refreshes quietly in the background on slow networks, ensuring you always have the latest data.
          </p>
        </div>
      </div>
    </section>
  );
}
