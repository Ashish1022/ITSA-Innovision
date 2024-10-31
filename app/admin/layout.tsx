"use client"

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const currentUser = useQuery(api.users.getCurrentUser)
    const router = useRouter()
    return (
        <>
            {currentUser?.isMember ? (
                <div className="flex h-screen flex-col relative">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            ) : (
                <div className="flex items-center gap-2 flex-col justify-center h-screen w-full bg-black-1">
                    <h1 className="text-white-1 text-[32px]">Permission denied: Admins Page</h1>
                    <div className="flex gap-2 hover:scale-105 transition cursor-pointer" onClick={() => router.push('/')}>
                        <p className="text-white-1">Return</p>
                        <ArrowRight className="text-white-1" />
                    </div>
                </div>
            )}

        </>
    );
}