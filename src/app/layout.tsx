import type { Metadata } from "next";
import { syne, inter, jetbrainsMono } from "@/lib/fonts";
import { SITE_URL } from "@/lib/constants";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import "./globals.css";

export const metadata: Metadata = {
  title: "Martín Giando — Software Dev Engineer",
  description:
    "Portfolio of Martín Giando, Software Dev Engineer based in Buenos Aires. Building robust systems and clean interfaces.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Martín Giando — Software Dev Engineer",
    description:
      "Software Dev Engineer based in Buenos Aires. Building robust systems and clean interfaces.",
    url: SITE_URL,
    siteName: "Martín Giando",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martín Giando — Software Dev Engineer",
    description:
      "Software Dev Engineer based in Buenos Aires. Building robust systems and clean interfaces.",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Martín Giando",
  jobTitle: "Software Dev Engineer",
  url: SITE_URL,
  sameAs: [
    "https://github.com/martingiando",
    "https://linkedin.com/in/martingiando",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <SmoothScrollProvider>
          <ScrollProgress />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
