import HeroSection from "@/components/HeroSection";
import { Spotlight } from "@/components/ui/spotlight-new";
import { SP } from "next/dist/shared/lib/utils";

export default function Home() {
	return (
		<main className="w-full h-screen relative overflow-x-hidden">
			<Spotlight />
			<HeroSection />
		</main>
	);
}
