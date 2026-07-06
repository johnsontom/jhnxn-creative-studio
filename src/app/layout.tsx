import type { Metadata } from "next";
import { Inter, Space_Grotesk, Sora } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jhnxncreative.vercel.app"),

  title: {
    default: "JHNXN Creative Studio",
    template: "%s | JHNXN Creative Studio",
  },

  description:
    "JHNXN Creative Studio creates premium websites, digital products, and creative experiences that combine stunning design, modern technology, and exceptional performance.",

  keywords: [
    "JHNXN",
    "JHNXN Creative Studio",
    "Web Design",
    "Website Development",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Portfolio",
    "Creative Studio",
    "UI Design",
    "Frontend Developer",
    "Music Production",
    "London Web Developer",
  ],

  authors: [
    {
      name: "JHNXN Creative Studio",
      url: "https://jhnxncreative.vercel.app",
    },
  ],

  creator: "JHNXN",

  publisher: "JHNXN Creative Studio",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "JHNXN Creative Studio",
    description:
      "Premium websites, digital products and creative experiences built with creativity, strategy and cutting-edge technology.",

    url: "https://jhnxncreative.vercel.app",

    siteName: "JHNXN Creative Studio",

    locale: "en_GB",

    type: "website",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "JHNXN Creative Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "JHNXN Creative Studio",

    description:
      "Premium websites, digital products and creative experiences.",

    images: ["/images/og-image.png"],

    creator: "@JHNXN",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${sora.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
<SpeedInsights />
      </body>
    </html>
  );
}