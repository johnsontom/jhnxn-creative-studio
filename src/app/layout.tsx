import type { Metadata } from "next";
import { Inter, Space_Grotesk, Sora } from "next/font/google";
import "./globals.css";

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
  title: {
    default: "JHNXN Creative Studio",
    template: "%s | JHNXN Creative Studio",
  },
  description:
    "Premium web design, development, and music production for businesses, creators, and brands.",
  keywords: [
    "JHNXN",
    "JHNXN Creative Studio",
    "Web Design",
    "Web Development",
    "Next.js",
    "Music Production",
    "Creative Studio",
  ],
  authors: [
    {
      name: "JHNXN Creative Studio",
    },
  ],
  creator: "JHNXN",
  openGraph: {
    title: "JHNXN Creative Studio",
    description:
      "Premium web design, development, and music production for businesses, creators, and brands.",
    siteName: "JHNXN Creative Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JHNXN Creative Studio",
    description:
      "Premium web design, development, and music production for businesses, creators, and brands.",
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
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${sora.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}