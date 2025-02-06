import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../store/providers";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/client/navbar/Navbar";
import HideNavbar from "./components/client/HideNavbar";
import Footer from "./components/client/Footer";
import ClientOnlyAOS from "./components/client/ClientOnlyAOS";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: `%s | NKBGS | N.K Bagrodia Global School - Excellence in Education`,
    default: "NKBGS | N.K Bagrodia Global School",
  },
  description:
    "NKBGS | N.K Bagrodia Global School - Providing quality education, holistic development, values-based learning, extracurricular activities, and a nurturing environment for students in Dwarka, Delhi, India.",
  keywords: [
    "School website",
    "Educational institute",
    "Academic excellence",
    "Best school in Dwarka",
    "Best school in Delhi",
    "Best school in India",
    "Quality education",
    "Student learning",
    "School admission",
    "Top CBSE school",
    "Schools in Dwarka, Delhi",
    "Secotor-17 Dwarka Delhi India educational institute",
    "Secotor-17 Dwarka Delhi India private school",
    "Top schools in Dwarka",
    "Affordable schools in Dwarka Delhi",
    "Holistic education",
    "Innovative teaching methods",
    "Extracurricular activities",
    "Sports and athletics",
    "Science and technology programs",
    "Art and music education",
    "STEM education",
    "Modern classrooms",
    "Digital learning tools",
    "Library and lab facilities",
    "Safe school campus",
    "Transport services",
    "Playgrounds and sports facilities",
    "Parent-teacher collaboration",
    "Child development",
    "Inclusive education",
    "Nurturing environment",
    "Leadership programs",
    "Moral and ethical values",
    "Best schools near me",
    "Admissions open",
    "Top-rated schools in Dwarka, Delhi, India",
    "Delhi school admission process",
    "Affordable school fees",
  ],
  openGraph: {
    title: {
      template: `%s | NKBGS | N.K Bagrodia Global School`,
      default: "NKBGS | N.K Bagrodia Global School",
    },
    url: "https://nkbgs.vercel.app/",
    type: "website",
    siteName: "NKBGS | N.K Bagrodia Global School",
    images: [
      {
        // url: "/api/og?title=NKBGS+|+N.K+Bagrodia+Global+School",
        url:"https://nkbgs.vercel.app/images/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <HideNavbar>
            <Navbar />
          </HideNavbar>
          <ClientOnlyAOS />
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
