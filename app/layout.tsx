import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Speak Better English with Paul",
  description: "Improve your English speaking skills with personalized lessons from Paul, an experienced English tutor.",
  icons: {
    icon: "/favicon.ico",
  },  

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopBar />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
