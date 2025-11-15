import { TextAnimate } from "../components/ui/text-animate";

export default function WhyChooseZuto() {
    return (
        <section id="whyZuto" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-16  items-center">
                <div>
                    <h2 className="text-4xl md:text-7xl text-center font-bold text-gray-900 mb-4">
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            className=" inline-block"
                        >
                            Why
                        </TextAnimate>{" "}
                        <span className="">
                            <TextAnimate
                                animation="blurInUp"
                                by="word"
                                className="text-amber-500 inline-block"
                            >
                                Choose Zuto
                            </TextAnimate>
                        </span>
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            className="inline-block"
                        >
                            ?
                        </TextAnimate>
                    </h2>
                    <h3 className="md:text-2xl text-xl text-center text-zinc-500 mb-4">
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            className="inline-block"
                        >
                            Not Just a Rental Platform —&nbsp;
                        </TextAnimate>
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            className=" inline-block"
                        >
                            A Community of Riders
                        </TextAnimate>
                        .
                    </h3>
                    <p className="text-gray-500 pt-8 md:text-2xl text-xl text-center mb-6 leading-relaxed">
                        Zuto isn’t just about renting bikes — it’s about
                        bringing together passionate riders and responsible
                        owners who believe in smarter, greener transportation.
                        <br />
                        With our verified ecosystem, secure transactions, and
                        user-friendly app, Zuto empowers you to explore cities
                        your way — anytime, anywhere.
                    </p>

                    <ul className="space-y-3 flex flex-wrap gap-3 justify-center">
                        <li className="flex items-start ">
                            <span className="text-gray-600 px-6 py-2 rounded-4xl border ">
                                Community-driven platform built on trust
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gray-600 px-6 py-2 rounded-4xl border">
                                Owned bikes only — no shared fleets
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gray-600 px-6 py-2 rounded-4xl border">
                                Designed for convenience, safety, and freedom
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
