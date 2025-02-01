import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { AuthProvider } from "./AuthProvider";
import SociaMediaFloatingIcons from "@/components/SociaMediaFloatingIcons";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Alfabourse Trading",
  description: "Alfabourse Trading with web trader integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <SociaMediaFloatingIcons />
        </AuthProvider>
      </body>
    </html>
  );
}
