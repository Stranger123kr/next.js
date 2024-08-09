import { GridBackgroundDemo } from "@/components/BackgroundDots";
import { Featuredcourse } from "@/components/Featuredcourse";
import HeroSection from "@/components/HeroSection";
import { StickyRoller } from "@/components/StickyScroll";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import { WaveBar } from "../components/WaveBar";
import Footer from "@/components/ui/Footer";
export default function Home() {
  return (
    <>
      <main className="bg-black/[0.95] text-white antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <Featuredcourse />
        <StickyRoller />
        <GridBackgroundDemo />
        <UpcomingWebinar />
        <WaveBar />
        <Footer />
      </main>
    </>
  );
}
