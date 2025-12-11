import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
	title: "Nuôi Tôi - Minh bạch sao kê",
	description: "Dự án donate minh bạch, vui vẻ.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="vi">
			<body className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
				<Header />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
