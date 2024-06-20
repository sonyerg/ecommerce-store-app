import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

import PreviewModalProvider from "@/provider/preview-modal-provider";
import ToastProvider from "@/provider/toast-provider";

import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store front page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <PreviewModalProvider />
        <ToastProvider />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
