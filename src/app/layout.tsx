import "bootstrap/dist/css/bootstrap.css";  // bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";  // bootstrap icons
import "aos/dist/aos.css";  // aos css
import Header from "@/components/Header";  // header

import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./variables.css";
import "./globals.css";

const ebGaramond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "newspaper",
  description: "welcome to newspaper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ebGaramond.className}>

        <Header />

        {children}
        
      </body>
    </html>
  );
}
