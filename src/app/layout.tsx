import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music App",
  description: "Created By Nitesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <link
        rel="shortcut icon"
        href="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Spotify-256.png"
        type="image/x-icon"
      />
      <body className={inter.className}>
        <div className="relative w-full flex justify-center items-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
