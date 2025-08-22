"use client";

import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import AllCourses from "@/data/courses.json";
import Image from "next/image";
import config from "../../next.config";

interface Course {
	id: number;
	title: string;
	slug: string;
	description: string;
	price: number;
	instructor: string;
	isFeatured: boolean;
	image: string;
}

export default function FeaturedCourses() {
	const featuredCourses: Course[] = AllCourses.filter(
		(c: Course) => c.isFeatured
	).map((c) => {
		const imgSrc =
			config.basePath != "" ? `${config.basePath}${c.image}` : c.image;
		return { ...c, image: imgSrc };
	});

	return (
		<div className="w-full min-h-full py-6 bg-slate-900">
			<div className="w-full flex flex-col justify-center items-center">
				<h2 className="mt-2 text-lg sm:text-xl lg:text-3xl lg:my-2 font-extrabold tracking-wide text-yellow-600">
					Featured Courses
				</h2>
				<p className="mt-1">Learn from the best</p>
			</div>

			<div className="my-10 grid grid-cols-1 sm:grid-cols-2 sm:px-10 lg:px-20 lg:grid-cols-3 justify-center auto-rows-fr gap-2 lg:gap-4">
				{featuredCourses.map((course) => (
					<div className="h-full mx-4" key={course.id}>
						<BackgroundGradient
							containerClassName="h-full"
							className="h-full flex flex-col justify-between gap-1 rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900"
						>
							<Image
								width={300}
								height={300}
								src={course.image}
								className="aspect-video rounded-md w-full hover:scale-105 transition-all ease-in-out"
								alt={course.title}
							/>
							{/* <div className="flex flex-col gap-1"> */}
							<p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
								{course.title}
							</p>

							<p className="text-sm text-neutral-600 dark:text-neutral-400">
								{course.description}
							</p>
							{/* </div> */}

							<Link
								href={`/courses/${course.slug}`}
								className="flex justify-between items-center bg-white/70 rounded-md text-black px-4 py-2 my-2 hover:bg-white/80"
							>
								<span className="">Explore</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="size-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m8.25 4.5 7.5 7.5-7.5 7.5"
									/>
								</svg>
							</Link>
						</BackgroundGradient>
					</div>
				))}
			</div>

			<div className="flex justify-center my-3">
				<Link
					href="/courses"
					className="bg-white rounded-md text-black px-4 py-2"
				>
					Explore all Courses
				</Link>
			</div>
		</div>
	);
}
