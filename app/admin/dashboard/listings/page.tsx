"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { useSelector } from "react-redux";
axios.defaults.withCredentials = true;

export default function Listing() {
    const router = useRouter();
    const token = useSelector((state: any) => state.user.token);    

    const [pendingListings, setPendingListings] = useState<any[]>([]);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);


    // Fetch Pending Listings on mount or tab change
    const fetchPendingListings = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_LISTING_API}/listings/admin/getPendingListings`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setPendingListings(response.data.listings || []);
        } catch (err) {
            console.error("Error fetching pending listings:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPendingListings();
    }, []);

    // ✅ Handle checkbox select
    const toggleSelect = (id: string) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    // ✅ Delete selected listings
    const deleteSelected = async () => {
        if (selectedIds.length === 0) return;
        try {
            await axios.post(
                `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/listings/admin/delete`,
                { ids: selectedIds },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setPendingListings((prev) =>
                prev.filter((listing) => !selectedIds.includes(listing._id))
            );
            setSelectedIds([]);
            alert("Selected listings deleted successfully.");
        } catch (err) {
            console.error("Error deleting listings:", err);
        }
    };

    // ✅ Handle row click → open listing page
    const openListing = (id: string) => {
        router.push(`/admin/dashboard/listings/${id}`);
    };

    return (
        <div className="flex flex-col gap-6 mt-24 px-4 md:px-10">
            <Tabs defaultValue="pending">
                <TabsList className="grid grid-cols-4 w-fit">
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                    <TabsTrigger value="approved">Approved</TabsTrigger>
                    <TabsTrigger value="rejected">Rejected</TabsTrigger>
                    <TabsTrigger value="deleted">Deleted</TabsTrigger>
                </TabsList>

                {/* ---------- Pending Tab ---------- */}
                <TabsContent value="pending">
                    <Card className="overflow-x-auto">
                        <CardHeader className="flex justify-between items-center">
                            <div>
                                <CardTitle>Pending Listings</CardTitle>
                                <CardDescription>
                                    Review and manage pending listings below.
                                </CardDescription>
                            </div>
                            {selectedIds.length > 0 && (
                                <Button
                                    variant="destructive"
                                    onClick={deleteSelected}
                                >
                                    Delete Selected ({selectedIds.length})
                                </Button>
                            )}
                        </CardHeader>

                        <CardContent>
                            {loading ? (
                                <p>Loading...</p>
                            ) : pendingListings.length === 0 ? (
                                <p>No pending listings found.</p>
                            ) : (
                                <table className="w-full text-left border-collapse border border-gray-300">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="p-2 border">
                                                <Checkbox
                                                    checked={
                                                        selectedIds.length ===
                                                        pendingListings.length
                                                    }
                                                    onCheckedChange={(
                                                        checked
                                                    ) => {
                                                        if (checked)
                                                            setSelectedIds(
                                                                pendingListings.map(
                                                                    (l) => l._id
                                                                )
                                                            );
                                                        else setSelectedIds([]);
                                                    }}
                                                />
                                            </th>
                                            <th className="p-2 border">Bike</th>
                                            <th className="p-2 border">
                                                Owner
                                            </th>
                                            <th className="p-2 border">
                                                Price/hr
                                            </th>
                                            <th className="p-2 border">
                                                Location
                                            </th>
                                            <th className="p-2 border">
                                                Created
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pendingListings.map((listing) => (
                                            <tr
                                                key={listing._id}
                                                className="hover:bg-gray-50 cursor-pointer"
                                                onClick={() =>
                                                    openListing(listing._id)
                                                }
                                            >
                                                <td
                                                    className="p-2 border text-center"
                                                    onClick={(e) =>
                                                        e.stopPropagation()
                                                    }
                                                >
                                                    <Checkbox
                                                        checked={selectedIds.includes(
                                                            listing._id
                                                        )}
                                                        onCheckedChange={() =>
                                                            toggleSelect(
                                                                listing._id
                                                            )
                                                        }
                                                    />
                                                </td>
                                                <td className="p-2 border">
                                                    {listing.bike.make}{" "}
                                                    {listing.bike.model}
                                                </td>
                                                <td className="p-2 border">
                                                    {listing.owner?.name}
                                                    <br />
                                                    <span className="text-xs text-gray-500">
                                                        {listing.owner?.phone}
                                                    </span>
                                                </td>
                                                <td className="p-2 border">
                                                    ₹{listing.pricePerHr}
                                                </td>
                                                <td className="p-2 border">
                                                    {listing.location.address}
                                                </td>
                                                <td className="p-2 border">
                                                    {new Date(
                                                        listing.createdAt
                                                    ).toLocaleString()}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
