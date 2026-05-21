import React from 'react';
import { Bookmark, Star, MapPin, ArrowRight, Store } from 'lucide-react';
import { Link } from 'react-router-dom';

const Providers = () => {
    const categories = [
        {
            id: 1,
            title: "Urban Cuts Studio",
            type: "Barber & Grooming",
            location: "Shopping Mall, 2nd Floor",
            desc: "Modern barbershop with contemporary style and skilled barbers",
            rating: 4.8,
            reviews: 1456,
            total: 45,
            active: 42,
            img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000",
            btnText: "View All Spa Centers",
            path: "/category/spa"
        },
        {
            id: 2,
            title: "Dental Care Clinic",
            type: "Medical Clinics",
            location: "Medical Tower, 4th Floor",
            desc: "Professional dental services with the latest medical technology",
            rating: 4.9,
            reviews: 890,
            total: 12,
            active: 10,
            img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000",
            btnText: "View All Clinics",
            path: "/category/clinic"
        },
        {
            id: 3,
            title: "Gentle Touch Salon",
            type: "Barber & Grooming",
            location: "Downtown Street, Bldg 5",
            desc: "Luxury grooming experience for the modern gentleman",
            rating: 4.7,
            reviews: 2100,
            total: 30,
            active: 28,
            img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000",
            btnText: "View All Barbers",
            path: "/category/barber"
        }
    ];

    return (
        <div className="p-[30px] bg-[#fcfcfc] min-h-screen animate-[fadeIn_0.4s_ease-in]">

            {/* Header */}
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-purple-600 p-3 text-white shadow-sm">
                        <Store size={22} />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">
                            Provider <span className="text-[#a855f7]">Categories</span>
                        </h2>

                        <p className="text-sm text-slate-500">
                            165 total providers • 155 active
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mb-[40px]">
                {/* Total Providers */}
                <div className="bg-[#00875A] p-[22px] rounded-[18px] text-white shadow-sm">
                    <p className="text-[11px] font-[700] opacity-90 tracking-[0.5px] uppercase mb-[4px]">Total Providers</p>
                    <h3 className="text-[32px] font-[800]">165</h3>
                    <span className="text-[12px] opacity-70">Across categories</span>
                </div>
                {/* Active Now */}
                <div className="bg-[#E53935] p-[22px] rounded-[18px] text-white shadow-sm">
                    <p className="text-[11px] font-[700] opacity-90 tracking-[0.5px] uppercase mb-[4px]">Active Now</p>
                    <h3 className="text-[32px] font-[800]">155</h3>
                    <span className="text-[12px] opacity-70">Currently operating</span>
                </div>
                {/* Categories Count */}
                <div className="bg-[#1A202E] p-[22px] rounded-[18px] text-white shadow-sm">
                    <p className="text-[11px] font-[700] opacity-90 tracking-[0.5px] uppercase mb-[4px]">Categories</p>
                    <h3 className="text-[32px] font-[800]">3</h3>
                    <span className="text-[12px] opacity-70">Service types</span>
                </div>
            </div>

            {/* Categories Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                {categories.map((cat, index) => (
                    <div
                        key={cat.id}
                        className="group relative h-[520px] rounded-[28px] p-[22px] text-white flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
                        style={{
                            animationDelay: `${(index + 1) * 100}ms`,
                            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.95)), url(${cat.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        {/* Top Tags */}
                        <div className="flex justify-between items-center relative z-10">
                            <span className="bg-[#E65100] px-[10px] py-[4px] rounded-[20px] text-[11px] font-[700] flex items-center">
                                <Star size={12} fill="white" className="mr-1" /> Top Rated
                            </span>
                            <button className="w-[36px] h-[36px] rounded-[10px] bg-[#0f172a]/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                                <Bookmark size={18} className="text-white" />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="relative z-10">
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-[14px] py-[5px] rounded-[12px] text-[12px] inline-block mb-[12px]">
                                {cat.type}
                            </span>
                            <h4 className="text-[26px] font-[700] mb-[6px] leading-tight group-hover:text-white/90 transition-all">{cat.title}</h4>
                            <p className="flex items-center text-[#cbd5e1] text-[13px] mb-[8px]">
                                <MapPin size={14} className="mr-1" /> {cat.location}
                            </p>
                            <p className="text-[#94a3b8] text-[14px] line-height-[1.5] mb-[15px]">
                                {cat.desc}
                            </p>

                            {/* Divider & Stats Footer */}
                            <div className="flex items-center justify-between py-[15px] mb-[25px] border-t border-white/15">
                                <div className="flex-1">
                                    <div className="flex items-center font-[700] text-[18px]">
                                        <Star size={16} fill="#FFB800" color="#FFB800" className="mr-1" /> {cat.rating}
                                    </div>
                                    <small className="text-[#94a3b8] text-[11px] lowercase">({cat.reviews})</small>
                                </div>
                                <div className="w-[1px] h-[25px] bg-white/15"></div>
                                <div className="flex-1 px-[20px]">
                                    <div className="font-[700] text-[18px]">{cat.total}</div>
                                    <small className="text-[#94a3b8] text-[11px] capitalize">Total</small>
                                </div>
                                <div className="w-[1px] h-[25px] bg-white/15"></div>
                                <div className="flex-1 px-[20px]">
                                    <div className="font-[700] text-[18px]">{cat.active}</div>
                                    <small className="text-[#94a3b8] text-[11px] capitalize">Active</small>
                                </div>
                            </div>

                            {/* View All Button */}
                            <Link
                                to={cat.path}
                                className="w-full bg-white text-[#1A202E] py-[14px] rounded-full font-[700] text-[13px] flex items-center justify-center transition-all duration-300 hover:bg-[#f8fafc] hover:tracking-[0.5px] hover:pl-[20px]"
                            >
                                {cat.btnText} <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Providers;