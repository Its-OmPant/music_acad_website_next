import React from "react";
import courses from "@/data/courses.json";
import CoursePage from "@/components/CoursePage";

type PageProps = {
	params: {
		courseSlug: string;
	};
};

async function page({ params }: PageProps) {
	const { courseSlug } = await params;

	return <CoursePage slug={courseSlug} />;
}

export default page;

// necessary for static exports
export async function generateStaticParams() {
	return courses.map((course) => ({
		courseSlug: course.slug,
	}));
}
