"use client";

import React from "react";
import { FollowerPointerCard } from "./ui/following-pointer";
import EventsData from "@/data/webinars.json";
import Image from "next/image";
import config from "../../next.config";

export default function Events() {
	const AllEvents = EventsData.map((c) => {
		const imgSrc =
			config.basePath != "" ? `${config.basePath}${c.image}` : c.image;
		return { ...c, image: imgSrc };
	});
	return (
		<div className="w-full h-full px-10 py-6">
			<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold my-3 lg:my-7 text-center">
				Upcoming Events
			</h3>
			<div className="grid p-4 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{AllEvents.map((e) => (
					<FollowerPointerCard key={e.id}>
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
