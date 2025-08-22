"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function HeroSection() {
	return (
		<div className="w-full min-h-screen flex flex-col py-6 gap-6 justify-center items-center">
			<div className="w-full h-10"></div>
			<h3 className="flex items-center gap-2 text-slate-200 md:text-xl lg:text-2xl">
				We&apos;re <Logo />
			</h3>
			<h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
				Master the art of{" "}
				<span className="text-blue-700 font-extrabold font-serif">
					Music
				</span>
			</h1>
			<p className="mt-4 w-xs mx-auto text-center text-sm/6 text-slate-200/70 sm:text-md md:w-lg md:mt-6 md:text-xl/8">
				Dive into our comprehensive music courses and transform your
				musical journey today. Whether you&apos;re a beginner or looking
				to refine your skills, join us to unlock your true potential.
			</p>
			<div className="mt-6 sm:mt-10">
				<Link href="/courses">
					<button className="bg-white dark:bg-slate-900 text-sm sm:text-md px-6 py-4 text-black dark:text-white rounded-md">
						Explore Courses
					</button>
				</Link>
			</div>
		</div>
	);
}
