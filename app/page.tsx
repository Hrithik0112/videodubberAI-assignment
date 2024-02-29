import CompanyBanner from "@/components/CompanyBanner";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItwork from "@/components/HowItwork";
import Howto from "@/components/Howto";
import Review from "@/components/Review";

export default function Home() {
  return (
    <div className="w-full  md:items-center md:justify-center">
      <Hero />
      <CompanyBanner />
      <HowItwork />
      <Features />
      <Howto />
      <Review />
    </div>
  );
}
