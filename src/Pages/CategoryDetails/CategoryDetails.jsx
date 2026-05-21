import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Eye, ChevronRight } from "lucide-react";

const mockData = {
    spa: [
        { id: 1, name: "Luxury Wellness Spa", provider: "Fatima Hassan Ali", location: "Jeddah, Al Hamra", rating: 4.7, revenue: "$32k", bookings: 850, img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800" },
        { id: 2, name: "Orchid Retreat Spa", provider: "Sara Ahmed", location: "Riyadh, Olaya", rating: 4.9, revenue: "$45k", bookings: 1100, img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800" },
        { id: 3, name: "Royal Serenity Center", provider: "Laila Mahmoud", location: "Dammam, Corniche", rating: 4.6, revenue: "$28k", bookings: 720, img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800" }
    ],
    barber: [
        { id: 4, name: "Modern Cuts Studio", provider: "Mohammed Ali Hassan", location: "Riyadh, Olaya District", rating: 4.8, revenue: "$29k", bookings: 980, img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800" },
        { id: 5, name: "Vintage Grooming", provider: "Ahmed Khaled", location: "Jeddah, Takhassusi St", rating: 4.7, revenue: "$22k", bookings: 650, img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800" },
        { id: 6, name: "The Gentleman’s Club", provider: "Omar Farouk", location: "Cairo, Maadi", rating: 4.5, revenue: "$18k", bookings: 500, img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800" }
    ],
    clinic: [
        { id: 7, name: "Elite Dental Care", provider: "Dr. Samer Ali", location: "Riyadh, North", rating: 4.9, revenue: "$55k", bookings: 1400, img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800" },
        { id: 8, name: "Vision Eye Center", provider: "Dr. Maha Ahmed", location: "Alexandria, Gleem", rating: 4.8, revenue: "$38k", bookings: 920, img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800" },
        { id: 9, name: "General Health Clinic", provider: "Dr. Hassan Ali", location: "Jeddah, Al Hamra", rating: 4.7, revenue: "$32k", bookings: 850, img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800" }
    ]
};

const formatTitle = (text = "") =>
    text.charAt(0).toUpperCase() + text.slice(1);

function ProviderCard({ item, categoryType }) {
    return (
        <div className="bg-white rounded-[20px] overflow-hidden border border-[#edf2f7] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-[160px]">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                <span className="absolute bottom-3 right-3 bg-white px-[10px] py-[4px] rounded-[10px] text-[12px] font-bold flex items-center gap-1 shadow-md">
                    <Star size={12} fill="#ffc107" color="#ffc107" /> {item.rating}
                </span>
            </div>

            <div className="p-[20px]">
                <h5 className="text-[17px] font-bold text-[#1e293b] mb-1">{item.name}</h5>
                <p className="text-[#64748b] text-[13px] mb-2">{item.provider}</p>

                <p className="text-[#94a3b8] text-[12px] flex items-center gap-1 mb-5">
                    <MapPin size={14} /> {item.location}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-[15px] border-t border-[#f1f5f9] mb-[20px]">
                    <Stat label="Revenue" value={item.revenue} />
                    <Stat label="Bookings" value={item.bookings} />
                </div>

                <Link
                    to={`/category/${categoryType}/${item.id}`}
                    className="w-full py-[12px] bg-[#0f172a] text-white rounded-[12px] font-semibold text-[13px] flex items-center justify-center gap-2 transition-all hover:bg-[#1e293b]"
                >
                    <Eye size={16} /> View Profile
                </Link>
            </div>
        </div>
    );
}

function Stat({ label, value }) {
    return (
        <div>
            <small className="block text-[#94a3b8] text-[11px] mb-1 uppercase tracking-wider font-semibold">
                {label}
            </small>
            <p className="font-bold text-[15px] text-[#1e293b]">{value}</p>
        </div>
    );
}

function CategoryDetails() {
    const { categoryType } = useParams();
    const [search, setSearch] = useState("");

    // ✅ FIX: data inside useMemo (removes ESLint warning)
    const filteredData = useMemo(() => {
        const data = mockData[categoryType] || [];

        return data.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [categoryType, search]);

    return (
        <div className="p-[25px] md:p-[40px] bg-[#f8fafc] min-h-screen animate-in fade-in duration-500">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-[20px] text-[14px]">
                <Link to="/providers" className="text-[#6366f1] font-medium hover:underline">
                    Providers
                </Link>
                <ChevronRight size={14} className="text-[#64748b]" />
                <span className="text-[#64748b] capitalize font-semibold">
                    {formatTitle(categoryType)}
                </span>
            </nav>

            {/* Header */}
            <div className="mb-[25px]">
                <h2 className="text-[28px] font-bold text-[#1e293b] mb-1">
                    {formatTitle(categoryType)} Center
                </h2>
                <p className="text-[#64748b] text-[14px]">
                    Total of {filteredData.length} active providers in this section
                </p>
            </div>

            {/* Search */}
            <div className="mb-[25px] max-w-[500px]">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={`Search in ${categoryType}...`}
                    className="w-full px-[20px] py-[12px] rounded-[12px] border border-[#e2e8f0] bg-white text-[14px] transition-all focus:outline-none focus:border-[#a855f7] focus:ring-3 focus:ring-[#a855f7]/10"
                />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                {filteredData.map((item) => (
                    <ProviderCard
                        key={item.id}
                        item={item}
                        categoryType={categoryType}
                    />
                ))}
            </div>
        </div>
    );
}

export default CategoryDetails;