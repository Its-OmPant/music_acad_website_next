"use client";
import React from "react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import FacultyData from "@/data/faculties.json";
import { cn } from "@/lib/utils";
import config from "../../next.config";

export default function Instructors() {
	const faculties = FacultyData.map((c) => {
		const imgSrc =
			config.basePath != "" ? `${config.basePath}${c.image}` : c.image;
		return { ...c, image: imgSrc };
	});

	return (
		<div className="relative flex w-full items-center justify-center bg-white dark:bg-black">
			<div
				className={cn(
					"absolute inset-0",
					"[background-size:20px_20px]",
					"[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
					"dark:[background-image:radial-gradient(#222222_1px,transparent_1px)]"
				)}
			/>
			{/* Radial gradient for the container to give a faded look */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
			{/* my component */}
			<div className="flex flex-col items-center py-10">
				<div className="mx-auto text-center max-w-lg text-lg/10 text-amber-400">
					Meet our
					<PointerHighlight
						rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
						pointerClassName="text-yellow-500"
					>
						<span className="relative z-10 text-4xl font-bold text-white px-3">
							{" "}
							Instructors{" "}
						</span>
					</PointerHighlight>
				</div>
				<div className="m-4 md:my-10">
					<AnimatedTestimonials
						testimonials={faculties.map((f) => ({
							name: f.name,
							designation: f.subjectTeaches,
							quote: f.wordForStudent,
							src: f.image,
						}))}
					/>
				</div>
				<div className="mx-4 text-center md:mt-8 px-2 z-30">
					<p className="text-md md:w-sm">
						At our music school, students thrive under the guidance
						of top-notch faculty, blending expertise, passion, and
						personalized mentorship.
					</p>
					<p className="text-md mt-3 text-amber-400 text-right">
						- Mr XYZ
					</p>
					<p className="text-xs text-gray-400 text-right">
						Founder MusicAcademy
					</p>
				</div>
			</div>
		</div>
	);
}
