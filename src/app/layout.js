import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Abdur Rahim | WEB Developer Portfolio",
  description: "Professional portfolio of Abdur Rahim Bin Bakkar, a web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-background text-text-primary font-sans antialiased transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <CustomCursor />
            <Navbar></Navbar>
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <Chatbot />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}


