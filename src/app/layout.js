import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../store/providers";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/client/navbar/Navbar";
import HideNavbar from "./components/client/HideNavbar";
import Footer from "./components/client/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NKBGS",
  description: "N.K Bagrodia Global School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <HideNavbar>
            <Navbar />
          </HideNavbar>
          <main className="bg-gray-200 text-gray-950">{children}</main>
          <HideNavbar>
            <Footer />
          </HideNavbar>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
