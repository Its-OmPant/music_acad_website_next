import React from "react";

async function page({ params }) {
	const { courseSlug } = await params;
	return <div className="w-full min-h-screen">{courseSlug}</div>;
}

export default page;
