import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
//const inter = Inter({ subsets: ["latin"] });
//when dark mode turn color to black
export const metadata: Metadata = {
  title: "Disney+ Clone",
  description: "Major Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1A1C29]">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
