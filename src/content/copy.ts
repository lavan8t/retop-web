/**
 * Site content and copy for retop.
 * Unslopped: direct plain language, active voice, sentence case headings,
 * zero em dashes, zero promotional fluff, zero AI tells.
 */

export const siteMeta = {
  title: "retop | A modern frontend for VTOP",
  description:
    "A fast, clean browser extension for VTOP. Instant timetable, attendance numbers, marks breakdown, and calendar export.",
};

export const navbarCopy = {
  brand: "retop",
  githubAria: "GitHub repository",
  openApp: "Go to retop",
  installExtension: "Install retop",
  unsupportedBrowser: "Browser unsupported",
};

export const heroCopy = {
  title: "retop",
  headline: "VTOP without the fuss.",
  description:
    "A browser extension that replaces the university portal with a clean, fast dashboard. No separate account, no cloud relay, and zero tracking. Built by VIT students.",
  ctaInstall: "Install retop",
  ctaOpen: "Go to retop",
  ctaUnsupported: "Browser unsupported",
};

export const dashboardCopy = {
  sections: [
    {
      id: "all-in-one",
      title: "Everything on one screen",
      description:
        "VTOP buries simple details under nested menus and slow page loads. retop pulls your timetable, attendance records, and grades into a single dashboard. Because your data stays in your browser, it opens in milliseconds without waiting on university servers.",
    },
    {
      id: "attendance",
      title: "Clear attendance numbers",
      description:
        "The left rail tracks your attendance with exact class counts and calculated bunk margins for every registered course. You can see immediately whether you can skip tomorrow morning's 8 AM lecture.",
    },
    {
      id: "calendar",
      title: "Academic calendar in the grid",
      description:
        "Instead of hunting down a PDF circular every two weeks to check day orders, the full semester calendar lives directly in the dashboard. Holidays, instructional day orders, and exam slots appear on the exact dates they happen.",
    },
    {
      id: "schedule-status",
      title: "Today's schedule and deadlines",
      description:
        "The right column keeps your current CGPA, today's schedule, and pending digital assignments visible. When hostel Wi-Fi slows to a crawl, your cached timetable still loads without timing out.",
    },
  ],
};

export const featuresCopy = {
  centerHeading: "Built beautiful.\nNot patched beautiful.",
  cards: {
    timetable: {
      semester: "Winter Semester 2026-27",
      status: "Active",
      type: "Theory and Lab Matrix",
    },
    attendance: {
      headline: "94%",
      margin: "Safe bunk margin (+4)",
    },
    schedule: {
      day: "Day 2 • Tuesday",
      summary: "3 classes today",
      nowBadge: "NOW",
      upcomingBadge: "UPCOMING",
    },
    cgpa: {
      value: "9.42",
      label: "CGPA",
      credits: "142 / 160 credits",
      assessmentsTitle: "Pending assessments",
    },
    idCard: {
      header: "VTOP",
      campus: "VELLORE CAMPUS",
      name: "John Doe",
      regNo: "21BCE0001",
      badge: "HOSTELLER",
    },
    marks: {
      title: "Marks breakdown",
    },
  },
};

export const themesCopy = {
  heading: "Pick your theme.",
  description:
    "11 accent colors, plus light, dark, and true black AMOLED modes. Changing colors updates every component immediately.",
  appearanceLabel: "Appearance",
  colorSchemeLabel: "Theme mode",
  accentLabel: "Accent color",
  themeOptions: [
    { id: "light", label: "Light" },
    { id: "dark", label: "Dark" },
    { id: "auto", label: "System" },
  ],
};

export const legacyCopy = {
  heading: "One click back to VTOP",
  description:
    "If you ever need a niche portal page we have not rewritten yet, a single toggle drops you right back into the default university interface. Nothing is locked or hidden.",
};

export const calendarCopy = {
  heading: "Sync your timetable to Google Calendar.",
  items: [
    {
      id: "google-sync",
      title: "Google Calendar sync",
      description:
        "Export your class schedule directly to your Google account. Semester holidays and day-order shifts apply automatically, so you never get reminders for classes that got cancelled.",
    },
    {
      id: "ical-export",
      title: "Apple Calendar and iCal export",
      description:
        "Download a standard .ics file to load your timetable into Apple Calendar, Outlook, or your phone calendar.",
    },
  ],
};

export const offlineCopy = {
  heading: "Works when campus Wi-Fi dies.",
  items: [
    {
      id: "local-cache",
      title: "Local storage first",
      description:
        "Your browser stores timetable, attendance records, and marks in IndexedDB. When you open the portal, the dashboard reads from disk in milliseconds instead of waiting on university servers.",
    },
    {
      id: "background-sync",
      title: "Silent background updates",
      description:
        "retop fetches new marks and attendance deltas in the background when connectivity returns. If the network drops mid-request, you still see your existing schedule.",
    },
  ],
};

export const omniboxCopy = {
  heading: "Jump to any page with the keyboard.",
  descriptionPrefix: "Tap",
  keyName: "Spacebar",
  descriptionSuffix:
    "anywhere inside VTOP to open the omnibox. Type what you need and hit enter.",
  items: [
    {
      id: "keyboard-nav",
      title: "Quick keyboard navigation",
      description:
        "Skip clicking through multi-level navigation trees. Type two letters of any page name to jump straight to course registration, marks, or hostel leaves.",
    },
    {
      id: "command-palette",
      title: "Command palette",
      description:
        "Works like Spotlight or Raycast. Filter pages, search course codes, and open links without touching your trackpad.",
    },
  ],
  sampleQuery: "timetable",
};

export const socialCopy = {
  heading: "Built by a VIT student who got tired of VTOP.",
  description:
    "I built retop because clicking through 2010s menus to check whether I had an 8 AM class was driving me nuts. The project is open source on GitHub with zero telemetry or tracking.",
  quote:
    "I forgot how painful VTOP was until I had to log in on a lab desktop.",
  quoteAuthor: "VIT Student",
  quoteContext: "3rd Year, CSE, Chennai Campus",
};

export const installCtaCopy = {
  headingLine1: "Fix your VTOP today.",
  headingLine2: "Free and open source.",
  ctaInstall: "Install retop",
  ctaOpen: "Go to retop",
  ctaUnsupported: "Browser unsupported",
  checklist: [
    "Fast, schedule focused dashboard",
    "Instant offline loading",
    "Google Calendar timetable sync",
    "Material Design themed",
    "Keyboard command palette for every page",
  ],
};

export const footerCopy = {
  brand: "retop",
  tagline: "A modern frontend for VTOP.",
  disclaimer:
    "retop is an open source community project, not affiliated with or endorsed by Vellore Institute of Technology. VTOP is a trademark of Vellore Institute of Technology.",
  legalHeading: "Legal",
  privacyLink: "Privacy policy",
  termsLink: "Terms of use",
  resourcesHeading: "Links",
  webStoreLink: "Chrome Web Store",
  githubLink: "GitHub repository",
};

export const privacyCopy = {
  title: "Privacy policy",
  lastUpdated: "Revision from July 4, 2026.",
  sections: [
    {
      title: "Your data stays on your machine",
      body: "retop does not collect, transmit, or sell your data. Everything required for the extension to work is stored strictly on your local browser profile. Neither the maintainers nor any third parties have access to your credentials or academic records.",
    },
    {
      title: "Zero analytics",
      body: "There is no telemetry, tracking pixel, or analytics script in retop. We do not know when you use the extension, what pages you visit, or what grades you have.",
    },
    {
      title: "Third-party services",
      body: "retop runs locally in your browser and communicates directly with university servers. No intermediate servers or third-party APIs process your traffic.",
    },
    {
      title: "No affiliation with VIT",
      body: "retop is an independent community project. It is not affiliated with, endorsed by, or connected to Vellore Institute of Technology. VTOP is a registered trademark of Vellore Institute of Technology.",
    },
    {
      title: "Policy updates",
      body: "Any updates to this policy will appear directly in this repository. Continuing to use retop after updates means you accept the revised terms.",
    },
  ],
};

export const termsCopy = {
  title: "Terms of use",
  lastUpdated: "Revision from July 4, 2026.",
  sections: [
    {
      title: "Definitions",
      items: [
        "retop: The open source browser extension and mobile application.",
        "Website: The getretop.web.app domain hosting this documentation.",
      ],
    },
    {
      title: "Open source license",
      body: "retop is open source software published under its repository license. You may inspect, fork, and build the code yourself on GitHub.",
    },
    {
      title: "Disclaimer of warranty",
      body: "The software is provided as-is, without warranty of any kind. You assume full responsibility for using the extension alongside your university account.",
    },
    {
      title: "Limitation of liability",
      body: "In no event, unless required by applicable law, will the maintainers be liable for any damages or disruptions arising from your use of the software.",
    },
    {
      title: "Trademark disclaimer",
      body: "retop is an independent community project, not affiliated with or endorsed by Vellore Institute of Technology. References to VTOP and VIT exist solely to describe compatibility.",
    },
    {
      title: "Terms updates",
      body: "We may update these terms when releasing new capabilities. Continuing to use retop confirms your agreement with updated terms.",
    },
  ],
};
