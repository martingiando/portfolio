import type { Metadata } from "next";
import { anybody, bodoni, inter, jetbrainsMono } from "@/lib/fonts";
import { SITE_CONFIG, SITE_URL } from "@/lib/constants";
import { JsonLd, person } from "@/lib/json-ld";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Cursor } from "@/components/shared/cursor";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.role}, React & Next.js`,
    template: `%s — ${SITE_CONFIG.name}`,
  },
  description:
    "Martín Giando, Senior Full Stack Engineer in Buenos Aires, Argentina. React, Next.js, TypeScript and Node.js. Open to full-time roles and freelance projects.",
  // Titles, descriptions and images fall back to each page's own
  openGraph: {
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "5gxSZEbkfyyUTRM6BoV8JaG-5VNGTBQwt8W_tdh0W_g",
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
      className={`${anybody.variable} ${bodoni.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <JsonLd
          data={{
            "@graph": [
              person,
              {
                "@type": "WebSite",
                "@id": `${SITE_URL}/#website`,
                name: SITE_CONFIG.name,
                url: SITE_URL,
                author: { "@id": person["@id"] },
              },
            ],
          }}
        />
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <SmoothScrollProvider>
          <Cursor />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
