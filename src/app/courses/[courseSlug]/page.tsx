import React from "react";
import courses from "@/data/courses.json";
import CoursePage from "@/components/CoursePage";

interface PageProps {
	params: Promise<{ courseSlug: string }>;
}

export default async function Page({ params }: PageProps) {
	const { courseSlug } = await params;
	return <CoursePage slug={courseSlug} />;
}

// necessary for static exports
export async function generateStaticParams() {
	return courses.map((course) => ({
		courseSlug: course.slug,
	}));
}
