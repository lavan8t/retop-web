"use client";

import { useEffect, useState } from "react";

export function useBrowserDetection() {
  // Default to true/Chrome during SSR to prevent hydration mismatch
  const [browserName, setBrowserName] = useState<string>("Chrome");
  const [isSupported, setIsSupported] = useState<boolean>(true);

  useEffect(() => {
    const checkBrowser = async () => {
      const userAgent = navigator.userAgent;
      const isChromium = !!(window as any).chrome;
      
      let name = "Chrome";
      let supported = true;

      // Brave specifically hides its user agent to prevent fingerprinting.
      // The only official way to detect Brave is via the async navigator.brave API.
      let isBrave = false;
      if ((navigator as any).brave && typeof (navigator as any).brave.isBrave === "function") {
        try {
          isBrave = await (navigator as any).brave.isBrave();
        } catch (e) {
          console.error(e);
        }
      }

      if (isBrave) {
        name = "Brave";
      } else if (userAgent.match(/Edg/i)) {
        name = "Edge";
      } else if (userAgent.match(/OPR/i) || userAgent.match(/Opera/i)) {
        name = "Opera";
      } else if (userAgent.match(/Vivaldi/i)) {
        name = "Vivaldi";
      } else if (userAgent.match(/Chrome/i) || isChromium) {
        name = "Chrome";
      } else {
        // Firefox, Safari, etc.
        supported = false;
      }

      setBrowserName(name);
      setIsSupported(supported);
    };

    checkBrowser();
  }, []);

  return { browserName, isSupported };
}
