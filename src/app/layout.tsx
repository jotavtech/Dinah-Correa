import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.city}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Serviços notariais e registrais em Solânea - PB. Atendimento presencial, remoto e telefônico com segurança jurídica, transparência e orientação clara.",
  applicationName: siteConfig.name,
  keywords: [
    "cartório",
    "Solânea",
    "Paraíba",
    "registro de imóveis",
    "tabelionato de notas",
    "protesto de títulos",
    "RTD PJ",
    "reconhecimento de firma",
    "Cartório Dinah Corrêa",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.city}`,
    description:
      "Serviços notariais e registrais em Solânea - PB. Segurança jurídica, transparência e orientação clara.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.city}`,
    description:
      "Serviços notariais e registrais em Solânea - PB. Segurança jurídica e atendimento claro.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description:
    "Serviços notariais e registrais em Solânea - PB: registro de imóveis, tabelionato de notas, protesto de títulos e RTD/PJ.",
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: `${siteConfig.url}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. José Amâncio Ramalho, 269, Centro",
    addressLocality: "Solânea",
    addressRegion: "PB",
    addressCountry: "BR",
  },
  areaServed: "Solânea e região, Paraíba",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  sameAs: [siteConfig.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
