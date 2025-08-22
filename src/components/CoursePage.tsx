"use client";

import React from "react";
import courses from "@/data/courses.json";
import CourseSidebar from "@/components/CourseSidebar";
import CoursePlayer from "@/components/CoursePlayer";
import { Course } from "@/types/Course";
import { notFound } from "next/navigation";

export default function CoursePage({ slug }: { slug: string }) {
	const course: Course | undefined = courses.find((c) => c.slug === slug);

	if (!course) {
		return notFound();
	}

	return (
		<div className="w-full min-h-screen pt-20 md:pt-28">
			{courses && (
				<div className="grid grid-cols-1 md:grid-cols-8 w-full h-full p-3">
					<div
						id="player"
						className="w-full md:col-span-5 lg:col-span-6 p-3"
					>
						<CoursePlayer course={course} />
					</div>
					<div
						id="sidebar"
						className="w-full md:col-span-3 lg:col-span-2 "
					>
						<CourseSidebar course={course} />
					</div>
				</div>
			)}
		</div>
	);
}
