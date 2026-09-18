import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import { AnalyticsClickTracker } from "@/components/analytics-click-tracker";
import { ClickStars } from "@/components/click-stars";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  aiStrategyKeywords,
  buildPageMetadata,
  defaultOgImage,
  siteName,
  siteUrl
} from "@/lib/seo";
import { contactEmail, linkedinUrl } from "@/lib/contact";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"]
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ANDRA | AI Workflows, AI Visibility, Growth Strategy",
    template: "%s"
  },
  applicationName: siteName,
  category: "business",
  creator: "ANDRA",
  publisher: siteName,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png"
  },
  ...buildPageMetadata({
    title: "ANDRA | AI Workflows, AI Visibility, Growth Strategy",
    description:
      "ANDRA publishes actionable guidance on AI workflows, AI tips and tricks, AI visibility, and recommended tools for brands that want stronger systems and smarter growth.",
    pathname: "/",
    keywords: aiStrategyKeywords
  })
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <JsonLd
          id="organization-schema"
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: siteName,
            alternateName: "Andra Izgarian",
            url: siteUrl,
            logo: {
              "@type": "ImageObject",
              url: `${siteUrl}/icon.svg`
            },
            image: defaultOgImage,
            description:
              "ANDRA advises brands on AI workflows, AI visibility, and growth strategy — including advertising inside AI surfaces such as ChatGPT Ads.",
            email: contactEmail,
            founder: {
              "@type": "Person",
              name: "Andra Izgarian",
              url: linkedinUrl,
              sameAs: [linkedinUrl]
            },
            sameAs: [linkedinUrl],
            knowsAbout: [
              "AI workflows",
              "AI visibility",
              "Generative Engine Optimization",
              "ChatGPT Ads",
              "OpenAI Ads Manager",
              "AI advertising",
              "Growth strategy"
            ]
          }}
        />
        <JsonLd
          id="website-schema"
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            name: siteName,
            url: siteUrl,
            image: defaultOgImage,
            publisher: { "@id": `${siteUrl}/#organization` },
            inLanguage: "en"
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QPCFDEM7GK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QPCFDEM7GK');
          `}
        </Script>
      </head>
      <body>
        <AnalyticsClickTracker />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ClickStars />
      </body>
    </html>
  );
}
