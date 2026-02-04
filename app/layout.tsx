import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karl Gallant | AI Systems Consulting",
  description:
    "Transform chaotic operations into intelligent systems. AI automation and systems mapping for businesses ready to scale.",
  keywords: [
    "AI consulting",
    "workflow automation",
    "systems mapping",
    "business automation",
    "AI integration",
  ],
  authors: [{ name: "Karl Gallant" }],
  openGraph: {
    title: "Karl Gallant | AI Systems Consulting",
    description:
      "Transform chaotic operations into intelligent systems. AI automation and systems mapping for businesses ready to scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
