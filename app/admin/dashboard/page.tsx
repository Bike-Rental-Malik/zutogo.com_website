"use client";

export default function AdminDashboard() {
    const cards = [
        { title: "Manage Revenue", color: "bg-amber-500 text-black", col: "col-span-2 row-span-1", link:"/admin/dashboard/revenue" },
        { title: "Approve Listings", color: "bg-white text-gray-900 border border-gray-200", col: "col-span-1 row-span-2", link:"/admin/dashboard/listings" },
        { title: "Bookings", color: "bg-black text-white", col: "col-span-1 row-span-1", link:"/admin/dashboard/bookings" },
        { title: "User Management", color: "bg-amber-500 text-black", col: "col-span-1 row-span-1", link:"/admin/dashboard/users" },
        { title: "Payments & Payouts", color: "bg-white text-gray-900 border border-gray-200", col: "col-span-2 row-span-1", link:"/admin/dashboard/payments" },
        { title: "Support Tickets", color: "bg-black text-white", col: "col-span-1 row-span-1", link:"/admin/dashboard/support" },
        { title: "Bike Verification", color: "bg-amber-500 text-black", col: "col-span-1 row-span-1", link:"/admin/dashboard/verification" },
        { title: "Analytics", color: "bg-white text-gray-900 border border-gray-200", col: "col-span-1 row-span-2", link:"/admin/dashboard/analytics" },
        { title: "Listings", color: "bg-black text-white", col: "col-span-1 row-span-1", link:"/admin/dashboard/listings" },
        { title: "System Logs", color: "bg-amber-500 text-black", col: "col-span-2 row-span-1", link:"/admin/dashboard/logs" },
    ];

    return (
        <div className="min-h-screen mt-20 p-6 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 auto-rows-[160px]">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className={`${card.color} ${card.col} flex items-end pb-2 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
                    >
                        <a href={card.link} className="text-xl md:text-2xl font-semibold px-3 underline">{card.title} ➔</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
