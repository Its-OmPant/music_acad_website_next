import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export default function ContactUs() {
	return (
		<div className="h-full w-full bg-slate-900 relative flex flex-col items-center justify-center antialiased">
			<div className="z-40 flex flex-col items-center justify-center py-10">
				<div className=" mx-4 my-10 text-center flex flex-col pt-12 justify-center items-center gap-3">
					<h1 className="text-2xl font-bold xs:text-3xl sm:text-4xl md:text-5xl">
						Contact Us
					</h1>
					<p className="text-gray-300 text-sm w-xs xs:w-md xs:text-lg">
						We are here to assist you regarding any of our program,
						features, services or events. Reach out and let us know
						how we can help to in your musical journey.
					</p>
				</div>
				<form
					action=""
					className="flex flex-col gap-3 sm:gap-5 w-xs xs:w-md sm:w-lg lg:w-2xl"
				>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Your email address"
						className="bg-black p-4 inline-block w-full mx-auto rounded-md placeholder:text-slate-400 "
					/>
					<textarea
						name="query"
						id="query"
						placeholder="Your Query"
						className="bg-black px-4 inline-block h-40 w-full mx-auto py-2 rounded-md placeholder:text-slate-400 "
					></textarea>
					<button className="bg-teal-900 p-4 w-full mx-auto rounded-md flex gap-3 justify-center items-center">
						Send
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
							/>
						</svg>
					</button>
				</form>
			</div>
			<BackgroundBeams />
		</div>
	);
}
