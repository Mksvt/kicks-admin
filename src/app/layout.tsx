import type { Metadata } from "next";
import { Open_Sans, Rubik } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/modules/layout/components/Navbar";
import { Sidebar } from "@/modules/layout/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
});

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Kicks: Admin Dashboard",
    description: "Admin dashboard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${openSans.variable} ${rubik.variable} antialiased flex h-screen w-screen`}
            >
                <SidebarProvider>
                    <Sidebar />
                    <div className="w-full ml-1">
                        <Navbar />
                        {children}
                    </div>
                </SidebarProvider>
            </body>
        </html>
    );
}
