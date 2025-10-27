import Image from "next/image";
import scooter from "../public/isolated-3d-scooter-icon.png";
import { TextAnimate } from "../components/ui/text-animate";

function HomePage() {
    return (
        <div>
            <main className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen mt-20 px-4 md:px-10 bg-white">

                {/* Left side: Text */}
                <div className="flex-1 ">
                    <h1 className="md:text-8xl text-6xl font-bold mb-6 text-gray-900">
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            className="inline-block"
                        >
                            Turn Every Trip Into an Adventure with&nbsp;
                        </TextAnimate>
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            className="text-amber-500 inline-block"
                        >
                            Zuto.
                        </TextAnimate>
                    </h1>

                    {/* <p className="text-lg text-gray-600 mb-8">
                            Affordable bikes for every journey — from quick errands to weekend getaways.
                        </p> */}
                    <div className="flex gap-2">
                        <div className="flex space-x-4 mb-8">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.zuto.app" // replace with your app link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                <svg
                                    viewBox="0 0 512 512"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 shrink-0"
                                >
                                    <path
                                        fill="#32BBFF"
                                        d="M382.369,175.623C322.891,142.356,227.427,88.937,79.355,6.028 C69.372-0.565,57.886-1.429,47.962,1.93l254.05,254.05L382.369,175.623z"
                                    />
                                    <path
                                        fill="#32BBFF"
                                        d="M47.962,1.93c-1.86,0.63-3.67,1.39-5.401,2.308C31.602,10.166,23.549,21.573,23.549,36v439.96 c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314L302.012,255.98L47.962,1.93z"
                                    />
                                    <path
                                        fill="#32BBFF"
                                        d="M302.012,255.98L47.956,510.035c9.927,3.384,21.413,2.586,31.399-4.103 c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L302.012,255.98z"
                                    />
                                    <path
                                        fill="#2C9FD9"
                                        d="M23.549,255.98v219.98c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314 L302.012,255.98H23.549z"
                                    />
                                    <path
                                        fill="#29CC5E"
                                        d="M79.355,6.028C67.5-1.8,53.52-1.577,42.561,4.239l255.595,255.596l84.212-84.212 C322.891,142.356,227.427,88.937,79.355,6.028z"
                                    />
                                    <path
                                        fill="#D93F21"
                                        d="M298.158,252.126L42.561,507.721c10.96,5.815,24.939,6.151,36.794-1.789 c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L298.158,252.126z"
                                    />
                                    <path
                                        fill="#FFD500"
                                        d="M488.45,255.98c0-12.19-6.151-24.492-18.342-31.314c0,0-22.799-12.721-92.682-51.809l-83.123,83.123 l83.204,83.205c69.116-38.807,92.6-51.892,92.6-51.892C482.299,280.472,488.45,268.17,488.45,255.98z"
                                    />
                                    <path
                                        fill="#FFAA00"
                                        d="M470.108,287.294c12.191-6.822,18.342-19.124,18.342-31.314H294.303l83.204,83.205 C446.624,300.379,470.108,287.294,470.108,287.294z"
                                    />
                                </svg>

                                <div className="flex flex-col leading-tight">
                                    <span className="text-[10px]">
                                        GET IT ON
                                    </span>
                                    <span className="text-sm font-semibold">
                                        Google Play
                                    </span>
                                </div>
                            </a>

                            <a
                                href="https://apps.apple.com/app/idYOUR_APP_ID" // replace with your app link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                <svg
                                    fill="#ffffff"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 shrink-0"
                                >
                                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"></path>
                                </svg>
                                <div className="flex flex-col leading-tight">
                                    <span className="text-[10px]">
                                        Download on the
                                    </span>
                                    <span className="text-sm font-semibold">
                                        App Store
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right side: Image */}
                <div className="flex-1 flex justify-center mt-5 md:mt-0">
                    <Image
                        src={scooter}
                        alt="Homepage Illustration"
                        className="w-full max-w-2xl"
                    />
                </div>
            </main>
        </div>
    );
}

export default HomePage;
