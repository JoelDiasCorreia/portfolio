import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";
import GoogleAnalytics from "./ui/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Joel Dias Correia&rsquo;s Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Joel Dias Correia" />
        <meta name="keywords" content="Joel Dias Correia, Portfolio, UX/UI Designer, Frontend Developer, FullStack Developer" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="rating" content="general" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="description" content="Joel Dias Correia's Portfolio - Fullstack developer - Web Development" />
        <GoogleAnalytics/>
      </head>
      <body className={inter.className}>
        
        <Header />  
        {children}
        <Footer />
        </body>
    </html>
  );
}
