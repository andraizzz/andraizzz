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
import "./globals.css";

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
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteName,
            url: siteUrl,
            image: defaultOgImage,
            sameAs: []
          })}
        </Script>
        <Script id="website-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteName,
            url: siteUrl,
            image: defaultOgImage
          })}
        </Script>
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
