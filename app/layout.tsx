import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google'
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ITSA Innovision",
  description: "Meet the community.",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-auto scrollbar-hide">
      <ConvexClerkProvider>
        <body className={poppins.variable}>

          {children}
          <Toaster/>
          <Analytics/>

        </body>
      </ConvexClerkProvider>
    </html>
  );
}
