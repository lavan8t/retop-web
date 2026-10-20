"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useExtensionDetection } from "@/hooks/useExtensionDetection";

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/retop/algmeibfbkahhjjgfkiifdnfcoomiigc?pli=1";

// The Google Form that keeps the answers. No backend of our own.
const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdPrhMvznGEPaU09e2xO36Dnn8hpI45ChBMDGzzVfzraOS_og/formResponse";
const ENTRY = "entry.534874022";

// The value sent must match the option text in the form, so the answer lands
// in the right column when the form is read later.
const REASONS = [
  { label: "Login did not work", value: "Login did not work" },
  { label: "The captcha is always filled wrongly", value: "captcha always filled wrongly" },
  { label: "I do not like retop", value: "i dont like retop" },
  { label: "I am not a student", value: "i am not a student" },
  { label: "Something else", value: "Other" },
];

export default function DisablePage() {
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);
  const [restored, setRestored] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const isExtInstalled = useExtensionDetection();

  useEffect(() => {
    document.title = "retop is off";
  }, []);

  const submitFeedback = (e: React.FormEvent) => {
    e.preventDefault();

    const value = reason === "Other" && details.trim() ? details.trim() : reason;
    if (!value) return;

    // A plain form post to the Google Form, hidden in an iframe so the page
    // stays where it is.
    const target = document.createElement("form");
    target.method = "POST";
    target.action = FORM_URL;
    target.target = "retop-feedback-frame";
    target.style.display = "none";

    const answer = document.createElement("input");
    answer.type = "hidden";
    answer.name = ENTRY;
    answer.value = value;
    target.appendChild(answer);

    if (reason === "Other") {
      const other = document.createElement("input");
      other.type = "hidden";
      other.name = `${ENTRY}_otherResponse`;
      other.value = details.trim();
      target.appendChild(other);
    }

    document.body.appendChild(target);
    target.submit();
    setSent(true);
  };

  const turnRetopBackOn = () => {
    // The extension's bridge on this origin passes it to the background.
    window.postMessage({ type: "RETOP_ENABLE_AGAIN" }, "*");
    setRestored(true);
  };

  return (
    <main className="relative w-full flex flex-col items-center">
      <div
        className="fixed inset-0 w-full h-dvh -z-50 pointer-events-none"
        style={{ background: "var(--retop-gradient)" }}
      />
      <Navbar chromeStoreUrl={CHROME_STORE_URL} animate={false} />

      <section className="relative w-full max-w-2xl px-6 md:px-12 pt-40 pb-24 z-20 flex flex-col gap-10 text-center">
        <div className="flex flex-col gap-4 items-center">
          <h1
            className="font-hero-base text-5xl md:text-6xl text-(--text-main) select-none leading-none"
            style={{
              fontVariationSettings:
                '"wdth" 125, "wght" 800, "GRAD" 100, "ROND" 100, "slnt" -10',
            }}
          >
            retop is off
          </h1>
          <p className="text-(--text-muted) font-medium leading-relaxed max-w-xl">
            You turned retop off from the VTOP sign-in page, so VTOP is back to
            the way the university made it. Nothing was deleted. Your cached
            timetable, attendance and marks are still on this device.
          </p>
        </div>

        <div className="bg-(--bg-card) border border-(--border-subtle) rounded-3xl p-6 sm:p-8 flex flex-col gap-6 text-left">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="font-title-base text-2xl text-(--text-main)">
              What went wrong?
            </h2>
            <p className="text-sm text-(--text-muted) font-medium">
              One tap is enough. It goes straight to us.
            </p>
          </div>

          <form onSubmit={submitFeedback} className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              {REASONS.map((r) => (
                <label
                  key={r.value}
                  className="flex items-center justify-center gap-3 text-sm sm:text-base text-(--text-main) font-medium cursor-pointer"
                >
                  <input
                    type="radio"
                    name="reason"
                    value={r.value}
                    checked={reason === r.value}
                    onChange={() => setReason(r.value)}
                    className="w-4 h-4 accent-(--accent) shrink-0"
                  />
                  {r.label}
                </label>
              ))}
            </div>

            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={4}
              placeholder="Tell us what happened (optional)"
              spellCheck={false}
              autoCorrect="off"
              autoCapitalize="off"
              autoComplete="off"
              className="w-full bg-(--bg-surface) border border-(--border-subtle) rounded-2xl px-4 py-3 text-sm text-(--text-main) font-medium placeholder:text-(--text-muted) focus:outline-none focus:border-(--accent) resize-y"
            />

            <div className="flex flex-col items-center gap-3">
              <button
                type="submit"
                disabled={!reason}
                className="bg-(--accent) text-(--on-accent) px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Send feedback
              </button>
              {sent && (
                <p className="text-sm text-(--accent) font-bold">Thanks, we got it.</p>
              )}
            </div>
          </form>
        </div>

        <div className="bg-(--bg-card) border border-(--border-subtle) rounded-3xl p-6 sm:p-8 flex flex-col gap-4 items-center text-center">
          <h2 className="font-title-base text-2xl text-(--text-main)">
            Want retop back?
          </h2>
          <p className="text-sm text-(--text-muted) font-medium max-w-md">
            Turn it on again with one tap. You can also re-enable the extension
            from your browser&apos;s extensions page.
          </p>
          <button
            type="button"
            onClick={turnRetopBackOn}
            className="bg-(--accent) text-(--on-accent) px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Turn retop back on
          </button>
          {restored && (
            <p className="text-sm text-(--accent) font-bold">
              {isExtInstalled
                ? "retop is back on. Reload the VTOP tab."
                : "Install the retop extension, then reload the VTOP tab."}
            </p>
          )}
        </div>
      </section>

      <Footer chromeStoreUrl={CHROME_STORE_URL} />
    </main>
  );
}
