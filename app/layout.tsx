import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapProvider } from './providers';

// Import Font Awesome
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the FontAwesome styles
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "jjimmobilienpartner",
  description: "Created By Inspirelogix",
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
         <BootstrapProvider>
        <Header />
        {children}
        <Footer />
        </BootstrapProvider>
      </body>
    </html>
  );
}
