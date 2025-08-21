import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Music Academy",
	description: "Music academy is a online music learning platform",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark h-full">
			<body className="h-full w-full bg-white text-black dark:bg-black dark:text-white antialiased">
				<div className="relative overflow-x-hidden">
					<Navbar className="" />
				</div>
				{children}
				<Footer />
			</body>
		</html>
	);
}
