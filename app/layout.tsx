import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import React from "react";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

//quitar  robots: "noindex, nofollow" cuando se quiera indexar el sitio

export const metadata: Metadata = {
  title: "Domos del Monte | Glamping Boutique en Villaguay, Entre Ríos",
  description:
    "Experiencia de glamping boutique para parejas en plena naturaleza. Domos geodésicos totalmente equipados, piscina y tranquilidad absoluta en Villaguay, Entre Ríos.",
  generator: "v0.app",
  keywords: [
    "glamping",
    "domos",
    "villaguay",
    "entre rios",
    "parejas",
    "escapada romantica",
    "naturaleza",
  ],
  robots: "noindex, nofollow",
  openGraph: {
    title: "Domos del Monte | Glamping Boutique en Villaguay, Entre Ríos",
    description:
      "Experiencia de glamping boutique para parejas en plena naturaleza. Domos geodésicos totalmente equipados, piscina y tranquilidad absoluta en Villaguay, Entre Ríos.",
    images: process.env.NEXT_PUBLIC_DOMAIN
      ? `${process.env.NEXT_PUBLIC_DOMAIN}/favicon.png`
      : "/og-image.png",
    url: process.env.NEXT_PUBLIC_DOMAIN || "https://domosdelmonte.com",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Domos del Monte | Glamping Boutique en Villaguay, Entre Ríos",
    description:
      "Experiencia de glamping boutique para parejas en plena naturaleza. Domos geodésicos totalmente equipados, piscina y tranquilidad absoluta en Villaguay, Entre Ríos.",
    images: process.env.NEXT_PUBLIC_DOMAIN
      ? `${process.env.NEXT_PUBLIC_DOMAIN}/favicon.png`
      : "/favicon.png",
  },
  authors: {
    name: "Domos del Monte",
    url: process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000",
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${nunito.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
