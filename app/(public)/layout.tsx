"use client"

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import GoToTopButton from "@/components/shared/GoToTopButton";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    let i = 0;
    return (
        <div className="flex h-screen flex-col relative">
            <Header />
            <main className="flex-1">
                <AnimatePresence mode="wait">
                    {children}
                </AnimatePresence>
            </main>
            <Footer />
            <GoToTopButton />
        </div>
    );
}