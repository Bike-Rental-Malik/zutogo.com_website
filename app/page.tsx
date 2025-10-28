
import { InteractiveHoverButton } from "../components/ui/interactive-hover-button";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/Features";
import WhyChooseZuto from "@/components/WhyChooseZuto";
import DownloadAppSection from "@/components/DownloadAppSection";
import HomePage from "@/components/HomePage";
import ContactUs from "@/components/ContactUs";
import TestimonialsSection from "@/components/testimonials";


export default function Home() {
    return (
        <div className="h-full w-full">
            <div className="w-full h-screen rounded-lg bg-black">
               
                <HomePage />

                <HowItWorks />

                <FeaturesSection />

                <WhyChooseZuto />

                <TestimonialsSection />

                <DownloadAppSection />

                <ContactUs />
            </div>
        </div>
    );
}
