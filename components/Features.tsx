import Image from "next/image";
import scooter from "../public/isolated-3d-scooter-icon (1).png";
import { Highlighter } from "./ui/highlighter";
import { TextAnimate } from "../components/ui/text-animate";

export default function FeaturesSection() {
    return (
        <section className="bg-white py-10 px-6 md:px-10">
            <h2 className="text-5xl md:text-7xl text-center font-bold text-gray-900 mb-4">
                <span className="text-amber-500">
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        className="text-amber-500 inline-block"
                    >
                        Smarter
                    </TextAnimate>
                </span>{" "}
                <TextAnimate
                    animation="blurInUp"
                    by="word"
                    className=" inline-block"
                >
                    Rentals,
                </TextAnimate>{" "}
                <span className="text-amber-500">
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        className=" inline-block"
                    >
                        Safer
                    </TextAnimate>
                </span>{" "}
                <TextAnimate
                    animation="blurInUp"
                    by="word"
                    className=" inline-block"
                >
                    Rides,
                </TextAnimate>{" "}
                <span className="text-amber-500">
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        className=" inline-block"
                    >
                        Seamless
                    </TextAnimate>
                </span>{" "}
                <TextAnimate
                    animation="blurInUp"
                    by="word"
                    className=" inline-block"
                >
                    Experience.
                </TextAnimate>
            </h2>
            <p className="md:text-2xl text-xl text-gray-500 text-center mb-10">
                <TextAnimate
                    animation="blurInUp"
                    by="word"
                    className=" inline-block"
                >
                    Zuto gives you total control&nbsp;
                </TextAnimate>

                <TextAnimate
                    animation="blurInUp"
                    by="word"
                    className=" inline-block"
                >
                    — from booking your ride to returning it safely. Our
                    platform is designed for
                </TextAnimate>

                <TextAnimate
                    animation="blurInUp"
                    by="word"
                    className=" inline-block"
                >
                    simplicity, trust, and freedom.
                </TextAnimate>
            </p>

            <div className="grid md:grid-cols-2 pt-8 gap-16 items-center">
                {/* Left side: Image */}
                <div className="flex justify-center">
                    <Image
                        src={scooter}
                        alt="Zuto App Features"
                        className="w-full max-w-xl "
                    />
                </div>

                {/* Right side: Text content */}
                <div>
                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-3xl font-bold text-gray-900 mb-2">
                                Verified Owners & Bikes
                            </h4>
                            <p className="text-gray-600 text-xl border-amber-500 border-t-2">
                                Every bike and owner goes through identity and
                                document verification to ensure your safety.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-3xl font-bold text-gray-900 mb-2">
                                Secure Payments
                            </h4>
                            <p className="text-gray-600 text-xl border-amber-500 border-t-2">
                                Book confidently with our in-app wallet and
                                enjoy instant refunds on cancellations.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-3xl font-bold text-gray-900 mb-2">
                                Real-time Tracking
                            </h4>
                            <p className="text-gray-600 text-xl border-amber-500 border-t-2">
                                Stay informed with GPS tracking and live ride
                                updates directly in the app.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-3xl font-bold text-gray-900 mb-2">
                                Transparent Pricing
                            </h4>
                            <p className="text-gray-600 text-xl border-amber-500 border-t-2">
                                No hidden charges. Pay only for the time you
                                ride — nothing more.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-3xl font-bold text-gray-900 mb-2">
                                Smart Suggestions
                            </h4>
                            <p className="text-gray-600 text-xl border-amber-500 border-t-2">
                                Get personalized ride recommendations based on
                                your habits and travel history.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-3xl font-bold text-gray-900 mb-2">
                                Extend or Cancel Anytime
                            </h4>
                            <p className="text-gray-600 text-xl border-amber-500 border-t-2">
                                Need more time? Extend your booking in one tap —
                                or cancel with a full refund before your ride
                                starts.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-3xl font-bold text-gray-900 mb-2">
                                Easy Rental Process
                            </h4>
                            <p className="text-gray-600 text-xl border-amber-500 border-t-2">
                                A smooth 3-step rental experience — find, book,
                                and ride without any hassle.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-3xl font-bold text-gray-900 mb-2">
                                24×7 Support
                            </h4>
                            <p className="text-gray-600 text-xl border-amber-500 border-t-2">
                                Our friendly team is always here to help —
                                before, during, and after your ride.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
