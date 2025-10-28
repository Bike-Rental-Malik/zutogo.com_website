import React from "react";
import { TextAnimate } from "./ui/text-animate";

function ContactUs() {
    return (
        <div>
            <section className="bg-white pt-20 pb-2">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 items-center text-center">
                    <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
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
                                href="#"
                                className="text-amber-500 hover:underline"
                            >
                                support@zuto.com
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold text-gray-800">
                                Office:
                            </span>{" "}
                            Pune, India
                        </p>
                        <p>
                            <span className="font-semibold text-gray-800">
                                Follow us:
                            </span>{" "}
                            <a
                                href="#"
                                className="text-amber-500 hover:underline"
                            >
                                Instagram
                            </a>{" "}
                            |{" "}
                            <a
                                href="#"
                                className="text-amber-500 hover:underline"
                            >
                                LinkedIn
                            </a>{" "}
                            |{" "}
                            <a
                                href="#"
                                className="text-amber-500 hover:underline"
                            >
                                Twitter
                            </a>
                        </p>
                    </div>

                    <div className="mt-16 flex flex-wrap justify-between border-t border-gray-200 pt-1">
                        <p className="text-gray-500 text-sm md:text-base">
                            © {new Date().getFullYear()} Zuto. All rights
                            reserved.
                        </p>
                        <p className="text-gray-500 text-sm md:text-base">
                            Privacy Policy | Terms and Conditions | Careers | Partner with Us
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactUs;
