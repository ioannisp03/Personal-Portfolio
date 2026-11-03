import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const { personal } = portfolio;

export const metadata: Metadata = {
  metadataBase: new URL(personal.siteUrl ?? "http://localhost:3000"),
  title: {
    default: `${personal.name} — ${personal.role}`,
    template: `%s — ${personal.name}`,
  },
  description: personal.description,
  applicationName: `${personal.name} | Engineering portfolio`,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: `${personal.name} | Portfolio`,
    title: `${personal.name} — ${personal.role}`,
    description: personal.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.role}`,
    description: personal.description,
  },
  robots: { index: !personal.placeholder, follow: !personal.placeholder },
};

export const viewport: Viewport = {
  themeColor: "#111211",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" id="top">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header name={personal.name} monogram={personal.monogram} />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer name={personal.name} />
      </body>
    </html>
  );
}
