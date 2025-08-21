"use client";
import React, { useState } from "react";
import Categories from "@/data/course-category.json";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);

	return (
		<div className={cn("w-screen fixed top-8  mx-auto z-50", className)}>
			<Menu
				setActive={setActive}
				className="flex justify-between mx-4 py-3 px-6 md:py-5 md:px-6 md:max-w-2xl md:mx-auto dark:bg-black/85 backdrop-blur-xs"
			>
				<Logo />
				<div className="hidden sm:flex gap-6">
					<Link href="/">
						<MenuItem
							active={active}
							setActive={setActive}
							item="Home"
						></MenuItem>
					</Link>
					<MenuItem
						setActive={setActive}
						active={active}
						item="Courses"
					>
						<div className="flex flex-col space-y-4 text-sm">
							{Categories.map((c, i) => (
								<HoveredLink href={c.href} key={i}>
									{c.label}
								</HoveredLink>
							))}
						</div>
					</MenuItem>
					<Link href="/events">
						<MenuItem
							setActive={setActive}
							active={active}
							item="Events"
						></MenuItem>
					</Link>
					<Link href="/contact">
						<MenuItem
							setActive={setActive}
							active={active}
							item="Contact Us"
						></MenuItem>
					</Link>
				</div>
				<div className="sm:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
						/>
					</svg>
				</div>
			</Menu>
		</div>
	);
}
