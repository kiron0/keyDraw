import getBaseURL from "@/utils/getBaseURL";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const BASE_URL = await getBaseURL();

  return {
    metadataBase: new URL(BASE_URL),
    title: 'KeyDraw - Draw your thoughts today!',
    description: "It's a simple drawing app to help you draw your thoughts. You can draw anything you want. It's absolutely free!",
    openGraph: {
      images: [
        {
          url: new URL('/logo.png', BASE_URL),
          width: 800,
          height: 600,
          alt: 'KeyDraw - Draw your thoughts today!',
        },
      ],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
