import Image from "next/image";
import scooter from "../public/isolated-3d-scooter-icon (1).png";
import { TextAnimate } from "../components/ui/text-animate";

const headingWords = [
    { text: "Smarter", color: "text-amber-500" },
    { text: "Rentals,", color: "" },
    { text: "Safer", color: "text-amber-500" },
    { text: "Rides,", color: "" },
    { text: "Seamless", color: "text-amber-500" },
    { text: "Experience.", color: "" },
];

const paragraphWords = [
    "Zuto gives you total control ",
    "— from booking your ride to returning it safely. Our platform is designed for",
    "simplicity, trust, and freedom.",
];

const topFeatures = [
    {
        title: "Verified Owners & Bikes",
        text: "Every bike and owner goes through identity and document verification to ensure your safety.",
    },
    {
        title: "Secure Payments",
        text: "Book confidently with our in-app wallet and enjoy instant refunds on cancellations.",
    },
    {
        title: "Real-time Tracking",
        text: "Stay informed with GPS tracking and live ride updates directly in the app.",
    },
    {
        title: "Transparent Pricing",
        text: "No hidden charges. Pay only for the time you ride — nothing more.",
    },
];

const bottomFeatures = [
    {
        title: "Smart Suggestions",
        text: "Get personalized ride recommendations based on your habits and travel history.",
    },
    {
        title: "Extend or Cancel Anytime",
        text: "Need more time? Extend your booking in one tap — or cancel with a full refund.",
    },
    {
        title: "Easy Rental Process",
        text: "A smooth 3-step rental experience — find, book, and ride without hassle.",
    },
    {
        title: "24×7 Support",
        text: "Our friendly team is always here to help — before, during, and after your ride.",
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                
                {/* HEADING */}
                <h2 className="text-4xl md:text-7xl text-center font-bold text-gray-900 mb-4">
                    {headingWords.map((word, i) => (
    <span key={i} className={`${word.color} inline-block mr-1`}>
        <TextAnimate animation="blurInUp" by="word">
            {`${word.text}`}
        </TextAnimate>
    </span>
))}

                </h2>

                {/* SUBTEXT */}
                <p className="md:text-2xl text-xl text-gray-500 text-center mb-10">
                    {paragraphWords.map((text, i) => (
    <TextAnimate
        key={i}
        animation="blurInUp"
        by="word"
        className="inline-block"
    >
        {`${text}`}
    </TextAnimate>
))}

                </p>

                {/* TOP ROW — IMAGE + 4 CARDS */}
                <div className="grid md:grid-cols-2 pt-8 gap-16 items-start">
                    {/* Image */}
                    <div className="flex justify-center">
                        <Image
                            src={scooter}
                            alt="Zuto App Features"
                            className="w-full max-w-xl"
                        />
                    </div>

                    {/* Top Feature Cards */}
                    <div className="grid sm:grid-cols-2 gap-8">
                        {topFeatures.map((feature, index) => (
                            <FeatureCard key={index} title={feature.title} text={feature.text} />
                        ))}
                    </div>
                </div>

                {/* BOTTOM ROW — 4 CARDS */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                    {bottomFeatures.map((feature, index) => (
                        <FeatureCard key={index} title={feature.title} text={feature.text} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ title, text }: { title: string; text: string }) {
    return (
        <div className="border rounded-4xl p-4 bg-white">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {title}
            </h4>
            <p className="text-gray-600 text-lg md:text-xl border-t-2 border-amber-500 pt-2">
                {text}
            </p>
        </div>
    );
}
