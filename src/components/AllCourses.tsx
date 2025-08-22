"use client";

import React from "react";
import { CometCard } from "./ui/comet-card";
import Image from "next/image";
import CourseData from "@/data/courses.json";
import Link from "next/link";
import config from "../../next.config";

function AllCourses() {
	const courses = CourseData.map((c) => {
		const imgSrc =
			config.basePath != "" ? `${config.basePath}${c.image}` : c.image;
		return { ...c, image: imgSrc };
	});
	return (
		<div className="w-full h-full py-12">
			<h1 className="text-2xl text-center font-bold">All Courses (10)</h1>
			<div className="w-[90%] my-5 mx-auto grid gap-x-4 gap-y-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
				{courses.map((c) => (
					<CometCard
						rotateDepth={5}
						translateDepth={5}
						key={c.id}
						className="my-2 flex flex-col items-center w-full"
					>
						<div className="border-2 p-3 rounded-md w-full">
							<h3 className="font-semibold my-2 text-center">
								{c.title}
							</h3>
							<Image
								src={c.image}
								alt="something"
								width={200}
								height={200}
								className="rounded-lg w-full aspect-video"
							/>
							<p className="text-sm text-slate-400 my-2 truncate w-[280px]">
								{c.description}
							</p>
							<div className="flex justify-between items-center">
								<span className="text-pink-400">
									${c.price}
								</span>
								<Link href={`/courses/${c.slug}`}>
									<button className="w-full bg-white/70 rounded-md text-black px-4 py-2 my-2 hover:bg-white/80">
										Enroll
									</button>
								</Link>
							</div>
						</div>
					</CometCard>
				))}
			</div>
		</div>
	);
}

export default AllCourses;
