import React from "react";
import { FollowerPointerCard, FollowPointer } from "./ui/following-pointer";
import AllEvents from "@/data/webinars.json";
import Image from "next/image";

export default function Events() {
	return (
		<div className="w-full h-full px-10 py-6">
			<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold my-3 lg:my-7 text-center">
				Upcoming Events
			</h3>
			<div className="grid p-4 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{AllEvents.map((e) => (
					<FollowerPointerCard key={e.id} title="">
						<div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white dark:bg-slate-900 transition duration-200 hover:shadow-xl">
							<div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
								<Image
									src={e.image}
									alt="thumbnail"
									width={200}
									height={200}
									className="h-full w-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
								/>
							</div>
							<div className="p-4">
								<h2 className="my-4 text-lg font-bold text-zinc-700 dark:text-white">
									{e.title}
								</h2>
								<h2 className="my-4 text-sm font-normal text-zinc-500 dark:text-white/80">
									{e.description}
								</h2>
								<div className="mt-10 flex flex-row items-center justify-between">
									<span className="text-sm text-pink-800 dark:text-pink-400">
										{e.dateTime}
									</span>
									<span className="text-sm text-amber-800 dark:text-amber-400">
										{e.venue}
									</span>
								</div>
							</div>
						</div>
					</FollowerPointerCard>
				))}
			</div>
		</div>
	);
}

const blogContent = {
	slug: "amazing-tailwindcss-grid-layouts",
	author: "Manu Arora",
	date: "28th March, 2023",
	title: "Amazing Tailwindcss Grid Layout Examples",
	description:
		"Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
	image: "/images/blues.jpg",
};
