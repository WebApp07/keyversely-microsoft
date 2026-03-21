import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import WhatsappButton from "@/components/WhatsappButton";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

// ✅ Facebook Pixel ID from environment
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const metadata: Metadata = {
  title: {
    template: `%s | ProStore`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),

  // ✅ SEO ADDITION 1: OpenGraph
  // Controls how your links look when shared on WhatsApp, Facebook, iMessage.
  // Without this, shared links show no image or a broken preview.
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },

  // ✅ SEO ADDITION 2: Twitter/X card
  // Makes links shared on Twitter/X show a large image preview.
  twitter: {
    card: "summary_large_image",
  },

  // ✅ SEO ADDITION 3: Robots rules
  // Explicitly tells Google it can index your site and show large product images.
  // "max-image-preview: large" = Google can show full-size product images in results.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html lang="en" suppressHydrationWarning>
      <>
        {/* ✅ SEO ADDITION 4: Font preconnect                               */}
        {/* You use Inter from Google Fonts. These 2 lines tell the browser   */}
        {/* to connect to Google's font servers ~200ms earlier than normal.   */}
        {/* Faster font load = better LCP score = better Google rankings.     */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* ===================================================== */}
        {/* ✅ Google Tag Manager */}
        {isProduction && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-M8SLRLGF');
              `,
            }}
          />
        )}

        {/* ===================================================== */}
        {/* ✅ Google Ads (gtag.js) */}
        {isProduction && (
          <>
            <Script
              id="gtag-js"
              strategy="afterInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=AW-17934054621"
            />
            <Script
              id="gtag-config"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'AW-17934054621');
                `,
              }}
            />
          </>
        )}

        {/* ===================================================== */}
        {/* ✅ Facebook Pixel */}

        {/* ✅ Facebook Pixel (optional – you can also move this to GTM later) */}
        {isProduction && FB_PIXEL_ID && (
          <>
            <Script
              id="fb-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${FB_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}

        {/* ===================================================== */}
        {/* ✅ Ahrefs Analytics */}
        {isProduction && (
          <Script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="Hcb8YOH2s2CejLAzBuJYFQ"
            async
            strategy="afterInteractive"
          />
        )}
      </>

      <body className={`${inter.className} antialiased`}>
        {/* ✅ Google Tag Manager (noscript) */}
        {isProduction && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-M8SLRLGF"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
          <WhatsappButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
