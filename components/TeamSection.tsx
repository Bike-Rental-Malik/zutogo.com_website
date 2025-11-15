import React from "react";
import { TextAnimate } from "./ui/text-animate";

interface TeamMember {
    name: string;
    role: string;
    mail: string;
    linkedIn: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "S. Malik basha",
        role: "CEO & Co-founder",
        mail: "malikbasha.ndp@gmail.com",
        linkedIn:
            "https://www.linkedin.com/in/malik-basha-0350b1392?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        image: "/malik.jpg",
    },
    {
        name: "K. Hanumanth reddy",
        role: "Founder and managing director",
        mail: "hanumanthkodidela@gmail.com",
        linkedIn:
            "https://www.linkedin.com/in/hanumanth-reddy-3a8082392?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        image: "/hanumanth.jpg",
    },
];

const TeamSection: React.FC = () => {
    return (
        <section
            id="team"
            className="bg-white py-16 flex flex-col items-center"
        >
            <div className="max-w-7xl text-center px-6 lg:px-16">
                <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-4">
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        className="inline-block"
                    >
                        Meet Our
                    </TextAnimate>{" "}
                    <span>
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            className="text-amber-500 inline-block"
                        >
                            Team
                        </TextAnimate>
                    </span>
                </h2>

                <h3 className="md:text-2xl text-xl text-zinc-500 mb-10">
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        className="inline-block"
                    >
                        The minds driving innovation and mobility at Zutogo.
                    </TextAnimate>
                </h3>

                <div className="flex flex-wrap pt-5 justify-center gap-6">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="flex items-center bg-white rounded-4xl p-4 h-32 justify-center gap-5 border transition-all duration-300"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-24 h-24 rounded-3xl object-cover grayscale"
                            />

                            <div>
                                <h3 className="text-gray-800 font-semibold text-md md:text-lg">
                                    {member.name}
                                </h3>

                                <p className="text-gray-500 text-xs md:text-sm">
                                    {member.role}
                                </p>

                                <a
                                    href={`mailto:${member.mail}`}
                                    className="text-blue-600 hover:underline text-xs md:text-sm"
                                >
                                    {member.mail}
                                </a>

                                <br />

                                <a
                                    href={`${member.linkedIn}`}
                                    className="text-blue-600 hover:underline text-xs md:text-sm"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
