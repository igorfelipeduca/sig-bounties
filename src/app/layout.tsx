import { Metadata } from "next";
import Header from "./(index)/components/header";
import Footer from "./components/footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const title = "Sig";
const description =
  "Sig is a DAO SaaS producer company, we buy ideas, and we make results happen.";
const url = "https://www.sigcoding.com";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    siteName: title,
    description,
    url,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "api/thumbnails?title=Sig Coding",
        width: 1200,
        height: 630,
        alt: "Sig Coding",
      },
    ],
  },
  twitter: {
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} <Footer />
      </body>
    </html>
  );
}
