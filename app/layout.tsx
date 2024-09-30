import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"
import localFont from "next/font/local";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: "Care Pulse",
  description: "Health Care Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn}>{children}</body>
    </html>
  );
}
