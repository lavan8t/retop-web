import { useState, useEffect } from "react";

declare global {
  interface Window {
    __RETOP_EXTENSION_INSTALLED__?: boolean;
  }
}

export function useExtensionDetection() {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const check = () => {
      if (
        localStorage.getItem("__RETOP_EXT_PRESENT__") === "true" ||
        window.__RETOP_EXTENSION_INSTALLED__ === true ||
        document.documentElement.getAttribute("data-retop-extension") === "true" ||
        window.location.search.includes("installed=true")
      ) {
        setIsInstalled(true);
        return true;
      }
      return false;
    };

    if (check()) return;

    const handleMsg = (e: MessageEvent) => {
      if (e.data?.type === "RETOP_EXT_PRESENT") {
        setIsInstalled(true);
      }
    };

    const handleReady = () => {
      setIsInstalled(true);
    };

    window.addEventListener("message", handleMsg);
    window.addEventListener("retop-extension-ready", handleReady);
    document.addEventListener("retop-extension-ready", handleReady);

    // Fast polling in case content script bridges slightly after DOM load
    const interval = setInterval(() => {
      if (check()) {
        clearInterval(interval);
      }
    }, 150);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 3000);

    return () => {
      window.removeEventListener("message", handleMsg);
      window.removeEventListener("retop-extension-ready", handleReady);
      document.removeEventListener("retop-extension-ready", handleReady);
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return isInstalled;
}
