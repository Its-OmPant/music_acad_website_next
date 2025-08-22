import React from "react";
import courses from "@/data/courses.json";
import CoursePage from "@/components/CoursePage";

type PageProps = {
	params: {
		courseSlug: string;
	};
	searchParams?: { [key: string]: string | string[] | undefined };
};

export default function Page({ params }: PageProps) {
	const { courseSlug } = params;
	return <CoursePage slug={courseSlug} />;
}

// necessary for static exports
export async function generateStaticParams() {
	return courses.map((course) => ({
		courseSlug: course.slug,
	}));
}
