"use client";

import { TextAnimate } from "../components/ui/text-animate";

export default function HowItWorks() {
    const rentersSteps = [
        {
            title: "Find nearby bikes",
            text: "Browse bikes available near your location with real-time availability.",
        },
        {
            title: "Book instantly",
            text: "Choose your preferred timings and complete payment instantly.",
        },
        {
            title: "Ride & return",
            text: "Pick up the bike, enjoy your trip, and return it at the same location.",
        },
    ];

    const ownersSteps = [
        {
            title: "List your bike",
            text: "Add bike details, upload documents, and set your rental price.",
        },
        {
            title: "Get verified",
            text: "Zuto verifies your documents and ensures your bike meets safety standards.",
        },
        {
            title: "Start earning",
            text: "Accept bookings, track your income, and receive payouts seamlessly.",
        },
    ];

    const renderSteps = (steps: { title: string; text: string }[]) =>
        steps.map((step, i) => (
            <div key={i} className="rounded-4xl p-4 border">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {step.title}
                </h4>
                <p className="text-gray-600 text-lg md:text-xl">{step.text}</p>
            </div>
        ));

    return (
        <section className="py-24 w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                {/* ------------ HEADER ------------ */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-7xl font-bold text-gray-900 leading-tight">
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            className="inline-block"
                        >
                            Your&nbsp;
                        </TextAnimate>
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            className="text-amber-500 inline-block"
                        >
                            Journey&nbsp;
                        </TextAnimate>
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            className="inline-block"
                        >
                            in 3 Simple Steps
                        </TextAnimate>
                    </h2>

                    <p className="mt-4 text-xl md:text-2xl text-gray-500 mx-auto">
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            className="inline-block"
                        >
                            Whether you're renting or listing —
                        </TextAnimate>
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            className="inline-block"
                        >
                            &nbsp;Zuto makes everything effortless.
                        </TextAnimate>
                    </p>
                </div>

                {/* ------------ TWO COLUMN STEPS ------------ */}
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Renters */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 border-b-2 border-amber-500 pb-2 mb-8">
                            For Renters
                        </h3>
                        <div className="space-y-6">
                            {renderSteps(rentersSteps)}
                        </div>
                    </div>

                    {/* Owners */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 border-b-2 border-amber-500 pb-2 mb-8">
                            For Owners
                        </h3>
                        <div className="space-y-6">
                            {renderSteps(ownersSteps)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
