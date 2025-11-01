"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "../../../store/userSlice";

export default function LoginForm() {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState<"request" | "verify">("request");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();

    const api = process.env.NEXT_PUBLIC_AUTH_API;

    // Handle OTP request
    const handleRequestOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const res = await axios.post(`${api}/admin/otp/request`, { phone });
            setMessage(res.data.message || "OTP sent successfully!");

            // move to verify step
            setOtp(res.data.otp_for_testing || ""); // auto-fill for testing
            setStep("verify");
        } catch (err: any) {
            console.error(err);
            setMessage(err.response?.data?.error || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    // Handle OTP verification
    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_AUTH_API}/auth/verifyOtp`,
                {
                    phone,
                    otp,
                }
            );

            if (res.data.token) {
                const { user, token } = res.data;
                dispatch(login({ user, token }));

                // You don’t need to set cookie manually since server already does
                router.push("/admin/dashboard");
            }
        } catch (err: any) {
            console.error(err);
            setMessage(err.response?.data?.message || "Invalid or expired OTP");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen px-6 ">
            <form
                onSubmit={
                    step === "request" ? handleRequestOtp : handleVerifyOtp
                }
                className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    {step === "request" ? "Login with Phone" : "Verify OTP"}
                </h2>

                {/* Phone input */}
                <label className="block mb-2 text-gray-600 font-medium">
                    Phone Number
                </label>
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none mb-4"
                    required
                    disabled={step === "verify"} // lock phone after requesting OTP
                />

                {/* OTP input (shown only after request) */}
                {step === "verify" && (
                    <>
                        <label className="block mb-2 text-gray-600 font-medium">
                            Enter OTP
                        </label>
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter the OTP"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none mb-4"
                            required
                        />
                    </>
                )}

                {/* Submit button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
                >
                    {loading
                        ? step === "request"
                            ? "Sending..."
                            : "Verifying..."
                        : step === "request"
                        ? "Get OTP"
                        : "Verify OTP"}
                </button>

                {/* Message */}
                {message && (
                    <p className="text-center text-sm mt-4 text-gray-700">
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}
