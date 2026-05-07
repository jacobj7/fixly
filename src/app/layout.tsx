import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fixly — Home Repair & Maintenance",
  description:
    "Book trusted, vetted professionals for any home repair or maintenance task. Fast, transparent, and hassle-free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
