import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";
import { Marquee } from "../components/ui/marquee";
import user from "../public/user (1).png";
import Image from "next/image";

const reviews = [
    {
        name: "Rohit Sharma",
        username: "@rohit",
        body: "Rented a bike through Zuto last weekend in Pune. The process was super smooth — just a few taps and I was riding! Highly recommend for quick city rides.",
    },
    {
        name: "Sneha Nair",
        username: "@sneha",
        body: "I was visiting Bangalore for work and used Zuto instead of cabs. Clean bikes, fair prices, and really convenient app experience!",
    },
    {
        name: "Arjun Mehta",
        username: "@arjun",
        body: "Loved the instant booking feature! No calls, no waiting. Just picked my slot and started the ride. Perfect for spontaneous weekend plans.",
    },
    {
        name: "Priya Iyer",
        username: "@priya",
        body: "Zuto made my daily commute so much easier. Affordable, reliable, and the verification process was super quick. Totally worth it!",
    },
    {
        name: "Manish Patel",
        username: "@manish",
        body: "Rented my bike out through Zuto — the approval and payment process were transparent. Nice way to earn some passive income!",
    },
    {
        name: "Aditi Singh",
        username: "@aditi",
        body: "Loved the experience! The app UI is clean, and I felt safe renting a verified bike with insurance and proper documents. Good job, Zuto!",
    },
    {
        name: "Karan Verma",
        username: "@karan",
        body: "Tried Zuto for a quick weekend getaway. Bikes were well-maintained and pickup was hassle-free. Definitely better than traditional rentals.",
    },
    {
        name: "Neha Gupta",
        username: "@neha",
        body: "Zuto is a lifesaver for college students like me! Easy bookings, low prices, and no unnecessary paperwork. 10/10.",
    },
    {
        name: "Ravi Kumar",
        username: "@ravi",
        body: "I’ve been using Zuto for a month now to commute to work. Smooth rides, instant payments, and polite support team. Very professional.",
    },
    {
        name: "Ishita Roy",
        username: "@ishita",
        body: "Used Zuto during my Goa trip. The bikes were in great condition and I loved the flexibility of choosing my time slots. Will use again!",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const ReviewCard = ({
    name,
    username,
    body,
}: {
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-4xl border p-4"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={user}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export default function TestimonialsSection() {
    return (
        <section id="reviews" className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 items-center text-center">
                <h2 className="text-4xl md:text-7xl font-bold text-gray-900 ">
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        className="inline-block"
                    >
                        What Our
                    </TextAnimate>{" "}
                    <span>
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            className="text-amber-500 inline-block"
                        >
                            Riders Say
                        </TextAnimate>
                    </span>
                </h2>

                <h3 className="md:text-2xl text-xl text-zinc-500 mb-10 mt-4">
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        className="inline-block"
                    >
                        Real experiences from our trusted Zuto community.
                    </TextAnimate>
                </h3>
                
                <div className="mt-10">
                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                        <Marquee pauseOnHover className="[--duration:20s]">
                            {firstRow.map((review) => (
                                <ReviewCard key={review.username} {...review} />
                            ))}
                        </Marquee>
                        <Marquee
                            reverse
                            pauseOnHover
                            className="[--duration:20s]"
                        >
                            {secondRow.map((review) => (
                                <ReviewCard key={review.username} {...review} />
                            ))}
                        </Marquee>
                        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
                        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
