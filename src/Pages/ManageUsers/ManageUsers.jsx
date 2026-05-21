import React from 'react';
import { Check, X, Clock, MapPin, Tag, User, DollarSign, Building2 } from 'lucide-react';

const Services = () => {
    const services = [
        {
            id: 1,
            name: "Laser Teeth Whitening",
            provider: "Elite Dental Care",
            category: "Medical Clinic",
            desc: "Professional laser session with sensitivity protection.",
            price: "1200 EGP",
            duration: "45 mins",
            location: "Branch A, Floor 2",
            staff: "Dr. Sarah Ahmed",
            status: "Pending",
            img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600"
        },
        {
            id: 2,
            name: "Men's Classic Cut",
            provider: "Urban Cuts Studio",
            category: "Barber",
            desc: "Full grooming experience including beard trim and hot towel.",
            price: "350 EGP",
            duration: "30 mins",
            location: "Main Branch, St. 10",
            staff: "Mohamed Ali",
            status: "Pending",
            img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600"
        }
    ];

    return (
        <div className="p-[30px] bg-[#fcfcfc] min-h-screen animate-[fadeIn_0.4s_ease-in]">


            {/* Header */}
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-green-500 p-3 text-white shadow-sm">

                        <Building2 size={22} />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">
                            Service Approvals
                        </h2>

                        <p className="text-sm text-slate-500">
                            Manage and review submitted services
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[24px]">
                {services.map((service) => (
                    <div key={service.id} className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all">
                        {/* Card Image Header */}
                        <div className="h-[180px] w-full relative">
                            <img src={service.img} alt={service.name} className="w-full h-full object-cover" />
                            <div className="absolute top-[15px] left-[15px] bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[11px] font-[700] uppercase tracking-wide flex items-center gap-1">
                                <Tag size={12} /> {service.category}
                            </div>
                            <div className="absolute top-[15px] right-[15px] bg-amber-500 text-white px-3 py-1 rounded-lg text-[11px] font-[700]">
                                {service.status}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-[20px]">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 className="text-[18px] font-[700] text-[#1e293b]">{service.name}</h3>
                                    <p className="text-[13px] text-[#64748b] mt-1">{service.provider}</p>
                                </div>
                            </div>

                            <p className="text-[14px] text-[#475569] mb-[20px] line-clamp-2">
                                {service.desc}
                            </p>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-[20px]">
                                <div className="flex items-center gap-2 text-[12px] text-[#64748b]">
                                    <DollarSign size={14} className="text-[#a855f7]" /> {service.price}
                                </div>
                                <div className="flex items-center gap-2 text-[12px] text-[#64748b]">
                                    <Clock size={14} className="text-[#a855f7]" /> {service.duration}
                                </div>
                                <div className="flex items-center gap-2 text-[12px] text-[#64748b]">
                                    <MapPin size={14} className="text-[#a855f7]" /> {service.location}
                                </div>
                                <div className="flex items-center gap-2 text-[12px] text-[#64748b]">
                                    <User size={14} className="text-[#a855f7]" /> {service.staff}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 pt-[15px] border-t border-gray-100">
                                <button className="flex-1 bg-[#10b981] hover:bg-[#059669] text-white py-[10px] rounded-[12px] font-[600] text-[13px] flex items-center justify-center transition-all">
                                    <Check size={16} className="mr-2" /> Approve
                                </button>
                                <button className="flex-1 bg-white hover:bg-red-50 text-[#ef4444] border border-[#ef4444] py-[10px] rounded-[12px] font-[600] text-[13px] flex items-center justify-center transition-all">
                                    <X size={16} className="mr-2" /> Reject
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;