import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "retop",
  description:
    "retop is a browser extension and web suite for VIT University students. Fast, offline-first dashboard.",
  alternates: {
    canonical: "https://getretop.web.app",
  },
  openGraph: {
    title: "retop",
    description:
      "Transform your VTOP portal into a stunning, fast dashboard.",
    url: "https://getretop.web.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "retop",
    description:
      "Transform your VTOP portal into a stunning, fast dashboard.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "retop",
  "operatingSystem": "Browser (Chrome, Firefox, Edge, Brave)",
  "applicationCategory": "ProductivityApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
  "description": "Fast, offline-first browser extension and web suite for VIT University students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link
          rel="icon"
          href="/favicon-light.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon-dark.ico"
          media="(prefers-color-scheme: dark)"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `if(typeof window!=="undefined"){window.litIssuedWarnings=new Set(["dev-mode"]);}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:px-4 focus:py-2 focus:bg-(--accent-base) focus:text-(--text-inverse) focus:rounded-xl focus:shadow-lg transition-all"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
