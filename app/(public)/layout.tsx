

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";


import GoToTopButton from "@/components/shared/GoToTopButton";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen flex-col relative">
            <Header />
            <main className="flex-1">

                {children}

            </main>
            <Footer />
            <GoToTopButton />
        </div>
    );
}