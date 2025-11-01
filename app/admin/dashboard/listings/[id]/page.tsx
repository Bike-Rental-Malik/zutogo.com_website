"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useSelector } from "react-redux";

axios.defaults.withCredentials = true;

export default function ListingDetail() {
    const { id } = useParams();
    const router = useRouter();
    const token = useSelector((state: any) => state.user.token);

    const [listing, setListing] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [approving, setApproving] = useState(false);

    // Fetch listing details
    const fetchListing = async () => {
        try {
            setLoading(true);
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_LISTING_API}/listings/${id}`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setListing(res.data);
        } catch (err) {
            console.error("Error fetching listing details:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchListing();
    }, [id]);

    // Approve listing
    const approveListing = async () => {
        try {
            setApproving(true);
            await axios.patch(
                `${process.env.NEXT_PUBLIC_LISTING_API}/listings/${id}/approve`,
                {},
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            alert("✅ Listing approved successfully!");
            router.push("/admin/dashboard/listings");
        } catch (err) {
            console.error("Error approving listing:", err);
            alert("Failed to approve listing.");
        } finally {
            setApproving(false);
        }
    };

    if (loading) return <p className="p-10 text-lg">Loading listing details...</p>;
    if (!listing) return <p className="p-10 text-lg">No listing found.</p>;

    const { bike, documents, location, owner, pricePerHr, createdAt } = listing;

    return (
        <div className="max-w-5xl mx-auto mt-24 p-6">
            <Card className="shadow-md">
                <CardHeader className="flex justify-between items-center">
                    <CardTitle className="text-2xl">
                        {bike.make} {bike.model}
                    </CardTitle>
                    <Button
                        disabled={approving}
                        onClick={approveListing}
                        className="bg-green-600 hover:bg-green-700 text-white"
                    >
                        {approving ? "Approving..." : "Approve Listing"}
                    </Button>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* Bike images */}
                    <div className="flex gap-4 overflow-x-auto">
                        {bike.photos?.map((photo: string, idx: number) => (
                            <div
                                key={idx}
                                className="relative min-w-[300px] h-[200px] rounded-md overflow-hidden"
                            >
                                <Image
                                    src={photo}
                                    alt={`Photo ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Bike Info */}
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <h3 className="font-semibold text-lg">Bike Details</h3>
                            <p>Make: {bike.make}</p>
                            <p>Model: {bike.model}</p>
                            <p>Mileage: {bike.mileage} kmpl</p>
                            <p>Year: {bike.year}</p>
                            <p>Price per Hour: ₹{pricePerHr}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">Owner Details</h3>
                            <p>Name: {owner.name}</p>
                            <p>Email: {owner.email}</p>
                            <p>Phone: {owner.phone}</p>
                        </div>
                    </div>

                    {/* Documents */}
                    <div className="mt-4">
                        <h3 className="font-semibold text-lg mb-2">Documents</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <a
                                    href={documents.rc}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    RC Document
                                </a>
                            </li>
                            <li>
                                Insurance: {documents.insurance.number} (Exp:{" "}
                                {new Date(documents.insurance.expiry).toLocaleDateString()})
                            </li>
                            <li>
                                <a
                                    href={documents.insurance.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    View Insurance PDF
                                </a>
                            </li>
                            <li>
                                PUC: {documents.puc.number} (Exp:{" "}
                                {new Date(documents.puc.expiry).toLocaleDateString()})
                            </li>
                            <li>
                                <a
                                    href={documents.puc.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    View PUC PDF
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div className="mt-4">
                        <h3 className="font-semibold text-lg">Location</h3>
                        <p>{location.address}</p>
                        <p>
                            Coordinates: {location.coordinates[1]}, {location.coordinates[0]}
                        </p>
                    </div>

                    <p className="text-sm text-gray-500 mt-4">
                        Created on: {new Date(createdAt).toLocaleString()}
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
