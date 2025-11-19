import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";

import { Figtree } from "next/font/google";

const figTree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Speak Better English - Professional Translation & Tutoring Services",
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
        className={`${figTree.className}  antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
