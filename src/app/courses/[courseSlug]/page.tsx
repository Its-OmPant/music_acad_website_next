import React from "react";
import courses from "@/data/courses.json";
import CoursePage from "@/components/CoursePage";

function page({ params }) {
	const { courseSlug } = params;

	return <CoursePage slug={courseSlug} />;
}

export default page;

// necessary for static exports
export async function generateStaticParams() {
	return courses.map((course) => ({
		courseSlug: course.slug,
	}));
}
