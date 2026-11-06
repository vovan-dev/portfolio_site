import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, JetBrains_Mono, Onest } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Onest({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Владимир Базан — Senior Full-Stack Developer";
const description =
  "Fullstack-разработчик с более чем 10-летним коммерческим опытом. SaaS, REST API, React, Next.js, Node.js, NestJS, Python, FastAPI, PostgreSQL.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Владимир Базан" }],
  keywords: [
    "Владимир Базан",
    "Full-Stack",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "FastAPI",
    "PostgreSQL",
  ],
  openGraph: {
    title,
    description,
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#12110f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
