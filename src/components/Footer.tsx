"use client";

import Link from "next/link";

function Footer() {
	return (
		<footer className="bg-black text-gray-400 py-6 px-3 z-30">
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
				<div>
					<h2 className="text-white text-lg font-semibold mb-4">
						About Us
					</h2>
					<p className="mb-4">
						Music School is a premier institution dedicated to
						teaching the art and science of music. We nurture talent
						from the ground up, fostering a vibrant community of
						musicians.
					</p>
				</div>
				<div className="sm:flex sm:flex-col sm:items-center">
					<h2 className="text-white text-lg font-semibold mb-4">
						Quick Links
					</h2>
					<ul>
						<li className="mt-2">
							<Link
								href="/"
								className="hover:text-white transition-colors duration-300"
							>
								Home
							</Link>
						</li>
						<li className="mt-2">
							<Link
								href="/courses"
								className="hover:text-white transition-colors duration-300"
							>
								Courses
							</Link>
						</li>
						<li className="mt-2">
							<Link
								href="/events"
								className="hover:text-white transition-colors duration-300"
							>
								Events
							</Link>
						</li>
						<li className="mt-2">
							<Link
								href="/contact"
								className="hover:text-white transition-colors duration-300"
							>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h2 className="text-white text-lg font-semibold mb-4">
						Follow Us
					</h2>
					<div className="flex flex-col gap-3 space-x-4">
						<Link
							href="/"
							className="flex gap-2 items-center hover:text-white transition-colors duration-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-facebook-icon lucide-facebook"
							>
								<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
							</svg>
							<span>Facebook</span>
						</Link>
						<Link
							href="/"
							className="flex gap-2 items-center hover:text-white transition-colors duration-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-twitter-icon lucide-twitter"
							>
								<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
							</svg>
							<span>Twitter</span>
						</Link>
						<Link
							href="/"
							className="flex gap-2 items-center hover:text-white transition-colors duration-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-instagram-icon lucide-instagram"
							>
								<rect
									width="20"
									height="20"
									x="2"
									y="2"
									rx="5"
									ry="5"
								/>
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
								<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
							</svg>
							<span>Instagram</span>
						</Link>
					</div>
				</div>
				<div>
					<h2 className="text-white text-lg font-semibold mb-4">
						Contact Us
					</h2>
					<p>New Delhi, India</p>
					<p>Delhi 10001</p>
					<p>Email: info@musicschool.com</p>
					<p>Phone: (123) 456-7890</p>
				</div>
			</div>
			<p className="text-center text-xs pt-8">
				© 2024 Music School. All rights reserved.
			</p>
		</footer>
	);
}

export default Footer;
