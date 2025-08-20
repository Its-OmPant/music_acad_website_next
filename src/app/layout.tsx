import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";

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
		<html lang="en" className="dark">
			<body className="min-w-screen min-h-screen bg-white text-black dark:bg-black dark:text-white antialiased overflow-hidden">
				<div className="relative w-full flex items-center justify-center">
					<Navbar className="w-full" />
				</div>
				{children}
			</body>
		</html>
	);
}
