import Header from "./(index)/components/header";
import Footer from "./components/footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sig",
  description: "DAO saas producer company",
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
