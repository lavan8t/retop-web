"use client";

import React, { useState, useEffect } from "react";
import {
  MobileDashboardMockup,
  MobileDashboardMockupProps,
} from "./mockups/MobileDashboardMockup";
import {
  DesktopDashboardMockup,
  DesktopDashboardMockupProps,
} from "./mockups/DesktopDashboardMockup";

export { MobileDashboardMockup, DesktopDashboardMockup };
export type { MobileDashboardMockupProps, DesktopDashboardMockupProps };

export interface DashboardMockupProps {
  className?: string;
  showDeviceFrame?: boolean;
  mode?: "auto" | "mobile" | "desktop";
}

const MOBILE_UA_REGEX =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i;

/* ═══════════════════════════════════════════════════════════════════════════
   ADAPTIVE DASHBOARD MOCKUP
   - Dispatches mobile vs desktop view based on user-agent detection or prop
   - Hydration-safe SSR fallback rendering
   ═══════════════════════════════════════════════════════════════════════════ */
export const DashboardMockup: React.FC<DashboardMockupProps> = ({
  className = "",
  showDeviceFrame = true,
  mode = "auto",
}) => {
  const [detectedMode, setDetectedMode] = useState<"mobile" | "desktop" | null>(null);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const isMobile = MOBILE_UA_REGEX.test(navigator.userAgent);
      setDetectedMode(isMobile ? "mobile" : "desktop");
    }
  }, []);

  const activeMode = mode !== "auto" ? mode : detectedMode;

  if (activeMode === "mobile") {
    return (
      <MobileDashboardMockup
        className={className}
        showDeviceFrame={showDeviceFrame}
      />
    );
  }

  if (activeMode === "desktop") {
    return (
      <DesktopDashboardMockup
        className={className}
        showDeviceFrame={showDeviceFrame}
      />
    );
  }

  // SSR and initial client mount: render responsive containers to prevent hydration mismatch
  return (
    <>
      <div className="block md:hidden w-full h-full pointer-events-none select-none">
        <MobileDashboardMockup
          className={className}
          showDeviceFrame={showDeviceFrame}
        />
      </div>
      <div className="hidden md:block w-full h-full pointer-events-none select-none">
        <DesktopDashboardMockup
          className={className}
          showDeviceFrame={showDeviceFrame}
        />
      </div>
    </>
  );
};

export default DashboardMockup;
