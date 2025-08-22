"use client";
import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import { Course, Chapter } from "@/types/Course";

export default function CourseSidebar({ course }: { course: Course }) {
	return (
		<div className="w-full p-5">
			<h3 className="font-bold mb-3">Course Content</h3>
			<Accordion type="multiple">
				{course.courseContent.map((c: Chapter, idx: number) => (
					<AccordionItem value={`item-${c.id}`} key={c.id}>
						<AccordionTrigger>{`${idx + 1} ${
							c.chapter_name
						}`}</AccordionTrigger>
						<AccordionContent>
							{c.lessons.map((l: string, idx: number) => (
								<div key={idx} className="pl-4 my-2">{`${
									idx + 1
								}: ${l}`}</div>
							))}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
