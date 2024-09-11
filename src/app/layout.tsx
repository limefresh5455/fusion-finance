import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Shadows_Into_Light } from "next/font/google";
import "./globals.css";
import NavBar from "../components/ui/nav-bar/NavBar";
import useResultsProvider from "@/components/context/cache";
import Footer from "@/components/ui/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const ResultsProvider = useResultsProvider;

export const metadata: Metadata = {
  title: "Fusion Finance",
  description: "Insurance providers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description || ""} />
        <title>{String(metadata.title)}</title>
      </Head>
      <body className={inter.className}>
        <ResultsProvider>
          <NavBar />
          {children}
          <Footer />
        </ResultsProvider>
      </body>
    </html>
  );
}
