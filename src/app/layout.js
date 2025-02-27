import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "../components/Contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "lorey",
  description: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
        <div className="container">
        <Navbar/>
        {children}
        <Analytics/>
        <Footer/>
        </div>
        </ThemeProvider>
        </body>
    </html>
  );
}
