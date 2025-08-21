import React from "react";
import Image from "next/image";
import { Course, Chapter } from "@/types/Course";

export default function CoursePlayer({ course }: { course: Course }) {
	return (
		<div className="w-full md:h-[80vh] max-h-[80vh] p-2 overflow-hidden">
			<div className="w-full h-4/5">
				<Image
					src={course.image}
					alt={course.title}
					width={400}
					height={400}
					className="w-full h-full object-cover rounded-md"
				/>
			</div>
			<div className="h-1/5 px-4 my-2">
				<h3 className="text-xl font-bold">{course.title}</h3>
				<p>{course.description}</p>
			</div>
		</div>
	);
}
