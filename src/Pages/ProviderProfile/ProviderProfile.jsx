import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, DollarSign, Calendar, TrendingUp, ShieldAlert, ChevronRight, LayoutGrid, Users, History, Clock } from 'lucide-react';

const ProviderProfile = () => {
    const { categoryType } = useParams();
    const [activeTab, setActiveTab] = useState('overview');

    const formatTitle = (text) => text ? text.charAt(0).toUpperCase() + text.slice(1) : "";

    const servicesData = [
        { id: 1, title: "Oil massage", location: "Downtown, Premium District", price: "80", rating: "4.9", reviews: "1245", category: "Spa & Wellness", img: "https://images.unsplash.com/photo-1544161515-450ce418465b?w=800" },
        { id: 2, title: "Oil Massage", location: "Downtown, Premium District", price: "80", rating: "4.9", reviews: "1245", category: "Spa & Wellness", img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800" },
        { id: 3, title: "Oil Massage 2", location: "Downtown, Premium District", price: "80", rating: "4.9", reviews: "1245", category: "Spa & Wellness", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800" },
    ];

    const staffData = [
        { id: 1, name: "Mahmoud.", role: "Senior Therapist", exp: "10 years", price: "80", rating: "4.9", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400" },
        { id: 2, name: "Mohammed", role: "Massage Specialist", exp: "10 years", price: "80", rating: "4.9", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
        { id: 3, name: "Yasser Fahmy", role: "Spa Therapist", exp: "10 years", price: "80", rating: "4.9", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" },
        { id: 4, name: "Mahmoud.", role: "Senior Therapist", exp: "10 years", price: "80", rating: "4.9", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400" },
        { id: 5, name: "Mahmoud.", role: "Senior Therapist", exp: "10 years", price: "80", rating: "4.9", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
    ];

    const weeklySchedule = [
        { day: "Sunday", time: "9:00 AM - 10:00 PM", slots: 26 },
        { day: "Monday", time: "9:00 AM - 10:00 PM", slots: 26 },
        { day: "Tuesday", time: "9:00 AM - 10:00 PM", slots: 26 },
        { day: "Wednesday", time: "9:00 AM - 10:00 PM", slots: 26 },
        { day: "Thursday", time: "9:00 AM - 10:00 PM", slots: 26 },
        { day: "Friday", time: "2:00 PM - 11:00 PM", slots: 18 },
        { day: "Saturday", time: "10:00 AM - 8:00 PM", slots: 20 },
    ];

    const timeSlots = [
        { time: "9:00 AM", status: "available" }, { time: "9:30 AM", status: "available" },
        { time: "10:00 AM", status: "booked", count: 2 }, { time: "10:30 AM", status: "booked", count: 1 },
        { time: "11:00 AM", status: "booked", count: 3 }, { time: "11:30 AM", status: "full", count: 4 },
        { time: "12:00 PM", status: "booked", count: 1 }, { time: "12:30 PM", status: "available" },
        { time: "1:00 PM", status: "booked", count: 2 }, { time: "1:30 PM", status: "booked", count: 1 },
        { time: "2:00 PM", status: "booked", count: 3 }, { time: "2:30 PM", status: "booked", count: 2 },
        { time: "3:00 PM", status: "full", count: 4 }, { time: "3:30 PM", status: "booked", count: 1 },
        { time: "4:00 PM", status: "available" }, { time: "4:30 PM", status: "booked", count: 2 },
        { time: "5:00 PM", status: "booked", count: 3 }, { time: "5:30 PM", status: "booked", count: 1 },
        { time: "6:00 PM", status: "full", count: 4 }, { time: "6:30 PM", status: "booked", count: 2 },
        { time: "7:00 PM", status: "booked", count: 1 }, { time: "7:30 PM", status: "available" },
        { time: "8:00 PM", status: "booked", count: 2 }, { time: "8:30 PM", status: "booked", count: 1 },
        { time: "9:00 PM", status: "available" }, { time: "9:30 PM", status: "booked", count: 1 }
    ];

    return (
        <div className="p-[25px] md:p-[40px] bg-[#f8fafc] min-h-screen animate-in fade-in duration-500">

            {/* 1. Breadcrumbs */}
            <nav className="flex items-center gap-2 mb-[25px] text-[14px]">
                <Link to="/providers" className="text-[#6366f1] font-medium hover:underline">Providers</Link>
                <ChevronRight size={14} className="text-[#cbd5e1]" />
                <Link to={`/category/${categoryType}`} className="text-[#6366f1] font-medium hover:underline capitalize">{categoryType}</Link>
                <ChevronRight size={14} className="text-[#cbd5e1]" />
                <span className="text-[#64748b]">Royal {formatTitle(categoryType)} Center</span>
            </nav>

            {/* 2. Header Card */}
            <div className="bg-[#111827] rounded-[24px] p-[30px] text-white mb-[25px] flex flex-col lg:flex-row gap-[30px]">
                <div className="flex flex-col gap-[12px] w-full lg:w-[280px]">
                    <img className="w-full h-[180px] rounded-[16px] object-cover border border-white/10" src="https://images.unsplash.com/photo-1544161515-450ce418465b?w=400" alt="Main" />
                    <div className="flex gap-[10px]">
                        <img className="w-[calc(50%-5px)] h-[75px] rounded-[12px] object-cover" src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=100" alt="t1" />
                        <img className="w-[calc(50%-5px)] h-[75px] rounded-[12px] object-cover" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=100" alt="t2" />
                    </div>
                </div>

                <div className="flex-1">
                    <span className="text-[11px] tracking-[1.5px] text-[#94a3b8] mb-2 block uppercase">{categoryType}</span>
                    <h2 className="text-[32px] font-bold mb-3">Royal {formatTitle(categoryType)} Center</h2>
                    <div className="flex flex-wrap gap-5 text-[14px] text-[#cbd5e1] mb-6">
                        <span className="flex items-center gap-1"><Star size={16} fill="#ffc107" color="#ffc107" /> 4.9 <small className="opacity-70">(342 reviews)</small></span>
                        <span className="flex items-center gap-1"><MapPin size={16} /> Riyadh, King Fahd Road, Building 123</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                        {[
                            { icon: <DollarSign size={18} />, label: "Revenue", val: "$45,680" },
                            { icon: <Calendar size={18} />, label: "Bookings", val: "1250" },
                            { icon: <LayoutGrid size={18} />, label: "Services", val: "4" },
                            { icon: <Users size={18} />, label: "Staff", val: "5" },
                            { icon: <TrendingUp size={18} />, label: "Growth", val: "+18.2%", color: "text-[#10b981]" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 p-3 rounded-[14px] border border-white/10 flex items-center gap-3">
                                <div className="bg-white/10 p-2 rounded-[10px]">{stat.icon}</div>
                                <div><small className="text-[#94a3b8] text-[11px] block">{stat.label}</small><p className={`font-bold text-[15px] ${stat.color || ""}`}>{stat.val}</p></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:self-start">
                    <button className="bg-[#ef4444] text-white px-5 py-[10px] rounded-[12px] flex items-center gap-2 font-semibold hover:bg-red-600 transition-colors">
                        <ShieldAlert size={18} /> Block Provider
                    </button>
                </div>
            </div>

            {/* 3. Tabs Navigation */}
            <div className="flex gap-3 mb-[30px] overflow-x-auto pb-2 no-scrollbar">
                {['overview', 'services', 'staff team', 'schedule'].map(tab => (
                    <button
                        key={tab}
                        className={`px-7 py-3 rounded-[10px] border font-semibold text-[14px] transition-all whitespace-nowrap
                        ${activeTab === tab ? 'bg-[#1e40af] text-white border-[#1e40af]' : 'bg-white text-[#64748b] border-[#e2e8f0] hover:border-[#1e40af]'}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {formatTitle(tab)}
                    </button>
                ))}
            </div>

            {/* 4. Tab Content */}
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px]">
                        <div className="lg:col-span-2 space-y-4">
                            <div className="bg-white p-6 rounded-[16px] border border-[#f1f5f9]">
                                <h3 className="text-[12px] font-bold text-[#94a3b8] uppercase mb-5 tracking-widest">Owner Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { l: "Full Name", v: "Ahmed Mohammed Al-Sayed" }, { l: "Age", v: "42 years" },
                                        { l: "Email", v: "ahmed@royalspa.com" }, { l: "Phone", v: "+966 50 123 4567" },
                                        { l: "Nationality", v: "Saudi" }, { l: "ID Number", v: "1234567890" }
                                    ].map((item, i) => (
                                        <div key={i}><label className="text-[12px] text-[#94a3b8] block mb-1">{item.l}</label><p className="font-semibold text-[#1e293b]">{item.v}</p></div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-[16px] border border-[#f1f5f9]">
                                <h3 className="text-[12px] font-bold text-[#94a3b8] uppercase mb-5 tracking-widest">Business Information</h3>
                                <div className="space-y-0">
                                    {[
                                        { l: "Tax Number", v: "300123456700003" }, { l: "Commercial Register", v: "CR-1234567890" },
                                        { l: "Registration Date", v: "Jan 15, 2024" }, { l: "Address", v: "Riyadh, King Fahd Road, Building 123" }
                                    ].map((row, i) => (
                                        <div key={i} className="flex justify-between py-4 border-bottom border-[#f8fafc] last:border-0 border-b border-[#f1f5f9]">
                                            <label className="text-[#94a3b8] text-[14px]">{row.l}</label><span className="font-medium text-[#1e293b]">{row.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-[#1e40af] text-white p-6 rounded-[16px] relative overflow-hidden">
                                <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4"><History size={24} /></div>
                                <small className="opacity-80 block mb-1">Current Plan</small>
                                <h4 className="text-[20px] font-bold mb-2">Unlimited Plan</h4>
                                <div className="text-[24px] font-bold mb-4">3500 SAR <span className="text-[14px] opacity-70">/ year</span></div>
                                <p className="text-[12px] pt-4 border-t border-white/10 opacity-70">Renews: Jan 15, 2027</p>
                            </div>
                            <div className="bg-white p-6 rounded-[16px] border border-[#f1f5f9]">
                                <h3 className="text-[12px] font-bold text-[#94a3b8] uppercase mb-5 tracking-widest">Performance</h3>
                                {[
                                    { l: "Completion Rate", v: "98%", c: "bg-[#10b981]" },
                                    { l: "Customer Satisfaction", v: "98%", c: "bg-[#3b82f6]" }
                                ].map((p, i) => (
                                    <div key={i} className="mb-4 last:mb-0">
                                        <div className="flex justify-between text-[14px] mb-2 font-medium"><span>{p.l}</span><span>{p.v}</span></div>
                                        <div className="h-2 bg-[#f1f5f9] rounded-full overflow-hidden"><div className={`h-full ${p.c}`} style={{ width: p.v }}></div></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'services' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                        {servicesData.map((service) => (
                            <div key={service.id} className="h-[600px] rounded-[40px] overflow-hidden relative group">
                                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-85" />
                                <div className="absolute top-[25px] left-[25px] right-[25px] flex justify-between z-10">
                                    <span className="bg-[#f97316] text-white px-4 py-2 rounded-full text-[12px] font-bold">★ Top Rated</span>
                                    <span className="bg-[#10b981] text-white px-4 py-2 rounded-full text-[11px] font-medium">Active</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-[40px_25px_30px_25px] flex flex-col justify-end text-white">
                                    <div className="mb-3"><span className="border border-white/40 px-4 py-1.5 rounded-full text-[12px] text-[#cbd5e1]">{service.category}</span></div>
                                    <h4 className="text-[36px] font-medium mb-2 tracking-tight">{service.title}</h4>
                                    <div className="flex items-center gap-2 text-[14px] text-[#94a3b8] mb-4"><MapPin size={14} />{service.location}</div>
                                    <p className="text-[14px] leading-relaxed text-[#cbd5e1] mb-8 line-clamp-2">Experience ultimate relaxation at our luxury spa with expert therapists and premium oils.</p>
                                    <div className="grid grid-cols-3 items-center mb-8">
                                        <div className="flex flex-col"><div className="flex items-center gap-1 text-[#fbbf24] font-bold text-lg"><Star size={16} fill="#fbbf24" />{service.rating}</div><span className="text-[11px] text-[#94a3b8]">({service.reviews})</span></div>
                                        <div className="border-l border-white/20 pl-5 flex flex-col"><span className="text-white font-semibold">BOOKING</span><span className="text-[11px] text-[#94a3b8]">Starting</span></div>
                                        <div className="border-l border-white/20 pl-5 flex flex-col"><span className="text-[12px] text-[#94a3b8]">from</span><span className="text-xl font-bold">${service.price}</span></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'staff team' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {staffData.map((m) => (
                            <div key={m.id} className="bg-white rounded-[24px] overflow-hidden border border-[#f1f5f9] group hover:shadow-xl transition-all">
                                <div className="h-[150px] relative bg-black">
                                    <img src={m.img} className="w-full h-full object-cover opacity-60 blur-[2px]" alt="bg" />
                                    <div className="absolute -bottom-[45px] left-1/2 -translate-x-1/2 w-[90px] h-[90px] rounded-full border-[5px] border-white overflow-hidden bg-white"><img src={m.img} className="w-full h-full object-cover" alt="avatar" /></div>
                                </div>
                                <div className="pt-[55px] p-5 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-1"><h4 className="font-bold text-[#1e293b] text-lg">{m.name}</h4><span className="w-2.5 h-2.5 bg-[#3b82f6] rounded-full"></span></div>
                                    <p className="text-[13px] text-[#94a3b8] mb-6">{m.role}</p>
                                    <div className="grid grid-cols-3 border-t border-[#f1f5f9] pt-4 text-[14px] font-bold text-[#1e293b]">
                                        <div className="flex flex-col"><span className="flex items-center justify-center gap-1"><Star size={14} fill="#fbbf24" color="#fbbf24" />{m.rating}</span><span className="text-[11px] font-normal text-[#94a3b8] mt-1">Rating</span></div>
                                        <div className="border-l border-[#f1f5f9] flex flex-col"><span>{m.exp}</span><span className="text-[11px] font-normal text-[#94a3b8] mt-1">Experience</span></div>
                                        <div className="border-l border-[#f1f5f9] flex flex-col"><span>${m.price}</span><span className="text-[11px] font-normal text-[#94a3b8] mt-1">Price</span></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'schedule' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-white p-[30px] rounded-[24px] border border-[#f1f5f9]">
                            <div className="flex items-center gap-4 mb-6"><div className="bg-[#3b82f6] p-3 rounded-[14px] text-white"><Calendar size={20} /></div><div><h4 className="font-bold text-lg">Weekly Schedule</h4><p className="text-[13px] text-[#94a3b8]">Regular business hours</p></div></div>
                            <div className="space-y-4">
                                {weeklySchedule.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 rounded-[16px] border border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors group">
                                        <div className="space-y-1"><div className="flex items-center font-bold text-[#1e293b]"><span className="w-2 h-2 bg-[#10b981] rounded-full mr-3"></span>{item.day}</div><div className="flex items-center gap-2 text-[13px] text-[#64748b] ml-5"><Clock size={14} />{item.time}</div></div>
                                        <div className="text-right"><span className="bg-[#dcfce7] text-[#10b981] px-3 py-1 rounded-lg text-[11px] font-extrabold block mb-1 uppercase">Open</span><small className="text-[11px] text-[#94a3b8]">{item.slots} slots</small></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-[30px] rounded-[24px] border border-[#f1f5f9]">
                            <div className="flex items-center gap-4 mb-6"><div className="bg-[#1e40af] p-3 rounded-[14px] text-white"><Clock size={20} /></div><div><h4 className="font-bold text-lg">Today's Availability</h4><p className="text-[13px] text-[#94a3b8]">Available booking slots</p></div></div>
                            <div className="flex gap-6 mb-6 p-3 bg-[#f8fafc] rounded-xl text-sm font-medium">
                                <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#10b981] rounded-full border-2 border-[#dcfce7]"></span>Available</span>
                                <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#ef4444] rounded-full border-2 border-[#fee2e2]"></span>Fully Booked</span>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                                {timeSlots.map((slot, i) => (
                                    <div key={i} className={`p-3 rounded-[12px] text-center border-2 transition-all ${slot.status === 'available' ? 'bg-green-50 border-green-500' : slot.status === 'full' ? 'bg-red-50 border-red-300 relative overflow-hidden' : 'bg-white border-slate-100'}`}>
                                        <span className="text-[13px] font-bold block">{slot.time}</span>
                                        {slot.count && <div className="text-[10px] mt-1 opacity-70">{slot.count} {slot.status === 'full' ? 'full' : 'booked'}</div>}
                                        {slot.status === 'full' && <div className="absolute w-[80%] h-[1.5px] bg-red-400 top-1/2 left-[10%] -rotate-[25deg]"></div>}
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1 bg-green-500 text-white p-3 rounded-xl text-center"><small className="text-[10px] block opacity-80 uppercase tracking-widest font-bold">Available</small><p className="text-xl font-bold">23</p></div>
                                <div className="flex-1 bg-red-500 text-white p-3 rounded-xl text-center"><small className="text-[10px] block opacity-80 uppercase tracking-widest font-bold">Booked</small><p className="text-xl font-bold">3</p></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProviderProfile;