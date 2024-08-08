import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  variable: "--font-source-roboto",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "BlogX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`subpixel-antialiased ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
