import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import { Spotlight } from "@/components/ui/spotlight-new";
import Webinars from "@/components/Webinars";

export default function Home() {
	return (
		<main className="w-full h-screen relative overflow-x-hidden">
			<Spotlight />
			<HeroSection />
			<FeaturedCourses />
			<Testimonials />
			<Webinars />
			<div className="h-80"></div>
		</main>
	);
}
