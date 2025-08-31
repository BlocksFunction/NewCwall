import type { Metadata } from "next";
import { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar/Navbar";
import "@/assets/styles/globals.css";

export const metadata: Metadata = {
    title: "New Cwall",
    description: "全新的Cwall, 由社区创建",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${GeistSans.className} ${GeistMono.className}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="">
                        <Navbar />
                    </div>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
