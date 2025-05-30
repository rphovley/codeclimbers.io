import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PHProvider } from "./providers";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeClimbers",
  description: "Building a portfolio of modern open-source apps. Focused on privacy, security, and performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <PHProvider>
        <body
          className={`${inter.variable} antialiased`}
        >
          {children}
        </body>
      </PHProvider>
    </html>
  );
}
