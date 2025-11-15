import { TextAnimate } from "./ui/text-animate";

function ContactUs() {
    return (
        <div>
            <section id="contact" className="bg-white pt-20 pb-2">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 items-center text-center">
                    <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-4">
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            className="inline-block"
                        >
                            Get
                        </TextAnimate>{" "}
                        <span>
                            <TextAnimate
                                animation="blurInUp"
                                by="word"
                                className="text-amber-500 inline-block"
                            >
                                in Touch
                            </TextAnimate>
                        </span>
                    </h2>

                    <h3 className="md:text-2xl text-xl text-zinc-500 mb-10">
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            className="inline-block"
                        >
                            Have questions or feedback? We’d love to hear from
                            you.
                        </TextAnimate>
                    </h3>

                    <div className="md:text-xl text-lg text-gray-600 leading-relaxed">
                        <p>
                            <span className="font-semibold text-gray-800">
                                Email:
                            </span>{" "}
                            <a
                                href="mailto:admin@zutogo.com"
                                className="text-amber-500 hover:underline"
                            >
                                admin@zutogo.com
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold text-gray-800">
                                Office:
                            </span>{" "}
                            Plot No 416, Prasanth Nagar, Vanasthalipuram, Ranga
                            Reddy District, Hyderabad, Telangana – 500070
                        </p>
                        <p>
                            <span className="font-semibold text-gray-800">
                                Follow us:
                            </span>{" "}
                            <a
                                href="https://www.instagram.com/zuto.go?igsh=MXJrbnpwbjQ2ZW1sYQ=="
                                className="text-amber-500 hover:underline"
                            >
                                Instagram
                            </a>{" "}
                            |{" "}
                            <a
                                href="https://www.linkedin.com/in/zuto-rentals-05751a396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                                className="text-amber-500 hover:underline"
                            >
                                LinkedIn
                            </a>{" "}
                            |{" "}
                            <a
                                href="https://www.facebook.com/share/1CqgnaBgML/"
                                className="text-amber-500 hover:underline"
                            >
                                Facebook
                            </a>
                        </p>
                    </div>

                    <div className="mt-16 flex flex-wrap justify-between items-center border-t border-gray-200 pt-4 gap-3">
                        <p className="text-gray-500 text-sm md:text-base">
                            © {new Date().getFullYear()} Zuto. All rights
                            reserved.
                        </p>

                        <div className="flex flex-wrap gap-3 text-gray-500 text-sm md:text-base">
                            <a
                                href="/privacy-policy"
                                className="hover:text-gray-700 hover:underline"
                            >
                                Privacy Policy
                            </a>
                            <span>|</span>

                            <a
                                href="/terms-and-conditions"
                                className="hover:text-gray-700 hover:underline"
                            >
                                Terms & Conditions
                            </a>
                            <span>|</span>

                            <a
                                href="/careers"
                                className="hover:text-gray-700 hover:underline"
                            >
                                Careers
                            </a>
                            <span>|</span>

                            <a
                                href="/partner"
                                className="hover:text-gray-700 hover:underline"
                            >
                                Partner with Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactUs;
