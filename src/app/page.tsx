import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import { Spotlight } from "@/components/ui/spotlight-new";
import Webinars from "@/components/Webinars";

export default function Home() {
	return (
		<main className="w-full relative overflow-x-hidden">
			<Spotlight />
			<HeroSection />
			<FeaturedCourses />
			<Testimonials />
			<Webinars />
			<Instructors />
		</main>
	);
}
