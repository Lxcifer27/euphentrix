import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, Navbar, Footer } from "@/components/layout";
import { SkipToMain } from "@/lib/accessibility";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Euphentrix | Innovate | Transform | Scale",
    template: "%s | Euphentrix",
  },
  description:
    "Euphentrix is a leading IT services company delivering innovative digital solutions including web development, mobile apps, AI/ML, blockchain, and cloud services.",
  keywords: [
    "IT services",
    "web development",
    "mobile app development",
    "UI/UX design",
    "AI/ML",
    "blockchain",
    "cloud services",
    "digital transformation",
  ],
  authors: [{ name: "Euphentrix" }],
  creator: "Euphentrix",
  metadataBase: new URL("https://euphentrix.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://euphentrix.com",
    siteName: "Euphentrix",
    title: "Euphentrix | Innovate | Transform | Scale",
    description:
      "Leading IT services company delivering innovative digital solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Euphentrix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Euphentrix | Innovate | Transform | Scale",
    description:
      "Leading IT services company delivering innovative digital solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <SkipToMain />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1" role="main">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
