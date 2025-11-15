"use client";

import React, { useState } from "react";
import axios from "axios";

export default function JoinWaitingList() {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !email.trim()) {
            alert("Please enter both name and email.");
            return;
        }

        try {
            const res = await axios.post("/api/waitinglist", { name, email });

            if (res.data.status) {
                alert("🎉 Joined successfully!");
            } else {
                alert(res.data.message);
            }
        } catch (error: any) {
            if (error.response?.status === 409) {
                alert("You already joined the waiting list!");
            } else {
                alert("Something went wrong.");
            }
        }
    };

    return (
        <>
            {/* Top Banner */}
            <div className="fixed top-0 z-[9999] w-full bg-amber-500 h-10 px-6 lg:px-16 flex items-center justify-between shadow">
                <h1 className="font-medium text-black">
                    App Launching Soon...
                </h1>
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-black text-white cursor-pointer text-sm px-4 py-1 rounded-md"
                >
                    Join Waiting List
                </button>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm animate-fadeIn">
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">
                            Join the Waiting List
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name Input */}
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />

                            {/* Email Input */}
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />

                            {/* Buttons */}
                            <div className="flex justify-end gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-4 py-2 rounded-md bg-amber-500 text-white hover:bg-amber-600"
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Optional Fade Animation */}
            <style jsx>{`
                .animate-fadeIn {
                    animation: fadeIn 0.25s ease-in-out;
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </>
    );
}
