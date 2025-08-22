"use client";
import React, { useState } from "react";
import Categories from "@/data/course-category.json";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "./Logo";

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerTrigger,
} from "@/components/ui/drawer";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

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
								<Link
									href={c.href}
									key={i}
									className="text-while hover:text-white/80"
								>
									{c.label}
								</Link>
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
					<Drawer direction="right">
						<DrawerTrigger>
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
						</DrawerTrigger>
						<DrawerContent className="px-6 py-5 !w-[250px]">
							<div className="flex justify-between my-3">
								<Logo />
								<DrawerClose>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-chevrons-right-icon lucide-chevrons-right"
									>
										<path d="m6 17 5-5-5-5" />
										<path d="m13 17 5-5-5-5" />
									</svg>
								</DrawerClose>
							</div>
							<div className="my-4 px-3 flex flex-col gap-4">
								<Link href="/">
									<DrawerClose className="w-full flex">
										Home
									</DrawerClose>
								</Link>
								<Accordion type="single" collapsible>
									<AccordionItem value="courses">
										<AccordionTrigger>
											Courses
										</AccordionTrigger>
										<AccordionContent>
											{Categories.map((c, i) => (
												<div
													className="my-4 px-3"
													key={i}
												>
													<Link href={c.href}>
														<DrawerClose className="w-full text-left">
															{c.label}
														</DrawerClose>
													</Link>
												</div>
											))}
										</AccordionContent>
									</AccordionItem>
								</Accordion>
								<Link href="/events">
									<DrawerClose className="w-full flex">
										Events
									</DrawerClose>
								</Link>
								<Link href="/contact">
									<DrawerClose className="w-full flex">
										Contact Us
									</DrawerClose>
								</Link>
							</div>
						</DrawerContent>
					</Drawer>
				</div>
			</Menu>
		</div>
	);
}
