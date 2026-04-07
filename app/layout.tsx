import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OSHKHANA — Uzbek, Uyghur & Pakistani Catering in Dallas",
  description:
    "Fresh plov, lagman, biryani, and more — catered for family gatherings, office lunches, nikkahs, and community events across DFW. Made to order by Anna Khanum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
