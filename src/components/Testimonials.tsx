"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import TestimonialItems from "@/data/testimonials.json";

export default function Testimonials() {
	return (
		<div className="relative flex flex-col items-center w-full h-[35rem] pt-10">
			<BackgroundRippleEffect rows={10} cols={20} />
			<div className="w-full flex flex-col justify-center items-center z-30">
				<h2 className="mt-10 text-lg sm:text-xl lg:text-3xl lg:my-2 font-extrabold tracking-wide text-teal-600">
					Testimonials
				</h2>
				<p className="mt-1">see what our users say about us...</p>
			</div>
			<div className="w-full max-w-6xl mt-16">
				<InfiniteMovingCards
					items={TestimonialItems}
					direction="left"
					speed="slow"
					itemClassName=""
				/>
			</div>
		</div>
	);
}
