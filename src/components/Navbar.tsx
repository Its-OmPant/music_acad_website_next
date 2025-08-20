"use client";
import React, { useState } from "react";
import Categories from "@/data/course-category.json";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);

	return (
		<div className={cn("fixed top-8 inset-x-0 mx-auto z-50", className)}>
			<Menu
				setActive={setActive}
				className="flex justify-between mx-4 py-3 px-6 md:max-w-2xl md:mx-auto "
			>
				<div id="logo" className="flex">
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
							d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
						/>
					</svg>
					cademy
				</div>
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
						item="All Courses"
					>
						<div className="flex flex-col space-y-4 text-sm">
							<HoveredLink href="/hobby">Hobby</HoveredLink>
							{Categories.map((c, i) => (
								<HoveredLink href={c.href} key={i}>
									{c.label}
								</HoveredLink>
							))}
						</div>
					</MenuItem>
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
