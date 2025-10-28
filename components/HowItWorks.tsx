import Image from "next/image";
import { DottedMap } from "../components/ui/dotted-map";
import Coins from "../public/coin.png";
import BookBike from "../public/book.png";
import getVerified from "../public/getVerified.png";
import listBike from "../public/listBike.png";
import rideAndReturn from "../public/ride&return.png";
import { Highlighter } from "../components/ui/highlighter";
import { TextAnimate } from "../components/ui/text-animate";

const markers = [
    {
        lat: 40.7128,
        lng: -74.006,
        size: 0.3,
    }, // New York
    {
        lat: 34.0522,
        lng: -118.2437,
        size: 0.3,
    }, // Los Angeles
    {
        lat: 51.5074,
        lng: -0.1278,
        size: 0.3,
    }, // London
    {
        lat: -33.8688,
        lng: 151.2093,
        size: 0.3,
    }, // Sydney
    {
        lat: 48.8566,
        lng: 2.3522,
        size: 0.3,
    }, // Paris
    {
        lat: 35.6762,
        lng: 139.6503,
        size: 0.3,
    }, // Tokyo
    {
        lat: 55.7558,
        lng: 37.6176,
        size: 0.3,
    }, // Moscow
    {
        lat: 39.9042,
        lng: 116.4074,
        size: 0.3,
    }, // Beijing
    {
        lat: 28.6139,
        lng: 77.209,
        size: 0.3,
    }, // New Delhi
    {
        lat: -23.5505,
        lng: -46.6333,
        size: 0.3,
    }, // São Paulo
    {
        lat: 1.3521,
        lng: 103.8198,
        size: 0.3,
    }, // Singapore
    {
        lat: 25.2048,
        lng: 55.2708,
        size: 0.3,
    }, // Dubai
    {
        lat: 52.52,
        lng: 13.405,
        size: 0.3,
    }, // Berlin
    {
        lat: 19.4326,
        lng: -99.1332,
        size: 0.3,
    }, // Mexico City
    {
        lat: -26.2041,
        lng: 28.0473,
        size: 0.3,
    }, // Johannesburg
];

export default function HowItWorks() {
    return (
        <section className="py-20 w-full">
            <div className="text-center mb-16 px-6 md:px-10">
                <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        className=" inline-block"
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
                        className=" inline-block"
                    >
                        in 3 Simple Steps.
                    </TextAnimate>
                </h2>
                <p className="md:text-2xl text-xl text-gray-500">
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        className="inline-block"
                    >
                        Whether you're renting or listing —&nbsp;
                    </TextAnimate>

                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        className=" inline-block"
                    >
                        Zuto makes it effortless.
                    </TextAnimate>
                </p>
            </div>

            <div className="relative w-full px-6 md:px-10">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
                    {/* Renters Section */}
                    <div className="flex flex-col space-y-8 z-10 w-full">
                        <div className="md:text-3xl text-2xl text-gray-500 border-amber-500 border-b-2">
                            Renter section
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {/* Top full card */}
                            <div className="relative md:col-span-2 rounded-xl overflow-hidden shadow-lg w-full h-48 md:h-60">
                                <DottedMap markers={markers} />
                                <div className="absolute bottom-0 left-0 p-4 rounded-tr-xl">
                                    <h4 className="text-xl md:text-3xl  text-zinc-950 font-bold">
                                        Find nearby bikes
                                    </h4>
                                    <h4 className="text-xl md:text-4xl text-zinc-600 ">
                                        Browse bikes available near your
                                        location on the Zuto app.
                                    </h4>
                                </div>
                            </div>

                            {/* Bottom half cards */}
                            <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-36 md:h-48">
                                {/* <Image
                                    src={BookBike}
                                    alt="Book instantly"
                                    className="w-full h-full object-cover blur-xs opacity-50"
                                /> */}
                                <div className="absolute bottom-0 left-0 p-3 rounded-tr-xl">
                                    <h4 className="text-zinc-950 text-lg md:text-3xl font-bold">
                                        Book instantly
                                    </h4>
                                    <h4 className="text-zinc-600 text-lg md:text-2xl">
                                        Choose your preferred time and pay
                                        securely within seconds.
                                    </h4>
                                </div>
                            </div>

                            <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-36 md:h-48">
                                {/* <Image
                                    src={rideAndReturn}
                                    alt="Ride and return"
                                    className="w-full h-full object-cover blur-xs opacity-50"
                                /> */}
                                <div className="absolute bottom-0 left-0 p-3 ">
                                    <h4 className="text-zinc-950 text-lg md:text-3xl font-bold">
                                        Ride and return
                                    </h4>
                                    <h4 className="text-zinc-600 text-lg md:text-2xl ">
                                        Pick up the bike, enjoy your journey,
                                        and drop it back safely.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Owners Section */}
                    <div className="flex flex-col space-y-8 z-10 w-full">
                        <div className="md:text-3xl text-2xl text-gray-500 border-amber-500 border-b-2">
                            Owners section
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {/* Top half cards */}
                            <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-36 md:h-48">
                                {/* <Image
                                    src={listBike}
                                    alt="List your bike"
                                    className="w-full h-full object-cover blur-xs opacity-50"
                                /> */}
                                <div className="absolute bottom-0 left-0 p-3">
                                    <h4 className="text-zinc-950 text-lg md:text-3xl font-bold">
                                        List your bike
                                    </h4>
                                    <h4 className="text-zinc-600 text-lg md:text-2xl ">
                                        Add your bike’s details, upload
                                        documents, and set your price.
                                    </h4>
                                </div>
                            </div>

                            <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-36 md:h-48">
                                {/* <Image
                                    src={getVerified}
                                    alt="Get verified"
                                    className="w-full h-full object-cover blur-xs opacity-50"
                                /> */}
                                <div className="absolute bottom-0 left-0 p-3 rounded-tr-xl">
                                    <h4 className="text-zinc-950 text-lg md:text-3xl font-bold">
                                        Get verified
                                    </h4>
                                    <h4 className="text-zinc-600 text-lg md:text-2xl ">
                                        Zuto ensures all owners and bikes meet
                                        safety and KYC standards.
                                    </h4>
                                </div>
                            </div>

                            {/* Bottom full card */}
                            <div className="relative md:col-span-2 rounded-xl overflow-hidden shadow-lg w-full h-48 md:h-60">
                                <Image
                                    src={Coins}
                                    alt="Earn effortlessly"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover opacity-50"
                                />
                                <div className="absolute bottom-0 left-0 p-4 rounded-tr-xl">
                                    <h4 className="text-zinc-950 text-xl md:text-3xl font-bold">
                                        Earn effortlessly
                                    </h4>
                                    <h4 className="text-zinc-600 text-xl md:text-4xl">
                                        Accept bookings, track earnings, and get
                                        payouts directly in your wallet.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
