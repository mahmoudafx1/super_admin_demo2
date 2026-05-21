import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft, CheckCircle, XCircle, Package, User,
    MapPin, Eye, Building2, CircleCheckBig, FileText,
    Download, X, CheckCircle2
} from 'lucide-react';
import './ReviewApplication.css';

const ReviewApplication = () => {
    const navigate = useNavigate();
    const [selectedDoc, setSelectedDoc] = useState(null);

    const openModal = (docName) => {
        setSelectedDoc({
            name: docName,
            fileName: "CR_Document_1234.pdf",
            size: "2.4 MB",
            date: "Feb 1, 2026",
            status: "Verified"
        });
    };

    const closeModal = () => setSelectedDoc(null);

    return (
        <div className="fade-in p-[30px] bg-[#fcfdfe] min-h-screen">
            {/* Back Header */}
            <div
                className="flex items-center gap-[8px] text-[#64748b] text-[20px] mb-[25px] cursor-pointer"
                onClick={() => navigate(-1)}
            >
                <ArrowLeft size={18} /> <span>Back to Pending Approvals</span>
            </div>

            {/* Hero Header Card */}
            <div className="bg-[#0f172a] rounded-[20px] p-[35px] text-white shadow-lg">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-[11px] text-[#94a3b8] font-[600] tracking-wider">SPA & WELLNESS</span>
                        <h2 className="text-[28px] font-[700] my-[8px]">Luxury Spa & Wellness Center</h2>
                        <p className="text-[#94a3b8] text-[15px]">Registration pending approval</p>
                        <div className="bg-[#1e293b] px-[14px] py-[6px] rounded-[10px] text-[13px] text-[#94a3b8] flex items-center gap-[6px] mt-[10px]">
                            <MapPin size={14} /> Applied: Feb 3, 2026
                        </div>
                    </div>
                    <div className="flex gap-[12px]">
                        <button className="bg-[#00c853] px-[28px] py-[12px] rounded-[12px] font-[600] flex items-center gap-[8px]">
                            <CheckCircle size={18} /> Approve
                        </button>
                        <button className="bg-[#ff3d00] px-[28px] py-[12px] rounded-[12px] font-[600] flex items-center gap-[8px]">
                            <XCircle size={18} /> Reject
                        </button>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="flex gap-[15px] mt-[30px]">
                    {[
                        { icon: Package, label: "PROPOSED SERVICES", value: "5" },
                        { icon: User, label: "PROPOSED STAFF", value: "5" },
                        { icon: FileText, label: "DOCUMENTS", value: "4/4" },
                        { icon: CircleCheckBig, label: "STATUS", value: "Complete" }
                    ].map((stat, i) => (
                        <div key={i} className="flex-1 bg-[#1e293b] border border-white/5 rounded-[15px] p-[20px] flex flex-col">
                            <stat.icon size={20} className="mb-[8px] text-[#94a3b8]" />
                            <label className="text-[10px] text-[#94a3b8] font-[700] mb-[5px]">{stat.label}</label>
                            <span className="text-[22px] font-[600] text-white">{stat.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-12 gap-[24px] mt-[24px]">
                {/* Left Side */}
                <div className="col-span-8 space-y-[24px]">
                    {/* Owner Info */}
                    <div className="bg-white border border-[#f1f5f9] rounded-[20px] p-[25px]">
                        <div className="flex items-center gap-[12px] mb-[25px]">
                            <div className="w-[36px] h-[36px] bg-[#eff6ff] text-[#3b82f6] rounded-[10px] flex items-center justify-center"><User size={25} /></div>
                            <h5 className="font-[700] text-slate-800">Owner Information</h5>
                        </div>
                        <div className="grid grid-cols-2 gap-[20px]">
                            {[
                                { label: "FULL NAME", val: "Mohammed Ahmed Al-Sayed" },
                                { label: "AGE", val: "42 years" },
                                { label: "EMAIL", val: "mohammed@luxuryspa.com" },
                                { label: "PHONE", val: "+966 50 123 4567" },
                                { label: "NATIONALITY", val: "Saudi" },
                                { label: "ID NUMBER", val: "1234567890" }
                            ].map((item, i) => (
                                <div key={i}>
                                    <label className="block text-[10px] text-[#94a3b8] font-[700] mb-[8px] uppercase">{item.label}</label>
                                    <div className="p-[12px] border border-[#f1f5f9] rounded-[12px] text-[14px] font-[500] text-slate-700">{item.val}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Business Info */}
                    <div className="bg-white border border-[#f1f5f9] rounded-[20px] p-[25px]">
                        <div className="flex items-center gap-[12px] mb-[25px]">
                            <div className="w-[36px] h-[36px] bg-[#f5f3ff] text-[#8b5cf6] rounded-[10px] flex items-center justify-center"><Building2 size={25} /></div>
                            <h5 className="font-[700] text-slate-800">Business Information</h5>
                        </div>
                        <div className="space-y-0 text-[14px]">
                            {[
                                { label: "Tax Number", val: "300123456700003" },
                                { label: "Commercial Register", val: "CR-1234567890" },
                                { label: "City", val: "Riyadh" },
                                { label: "District", val: "Al Olaya" },
                                { label: "Full Address", val: "Riyadh, King Fahd Road, Building 456", last: true }
                            ].map((item, i) => (
                                <div key={i} className={`flex justify-between py-[15px] ${!item.last ? 'border-bottom border-[#f8fafc]' : ''}`}>
                                    <label className="text-[#64748b]">{item.label}</label>
                                    <span className="font-[600] text-slate-800">{item.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="col-span-4 space-y-[24px]">
                    <div className="bg-white border border-[#f1f5f9] rounded-[20px] p-[25px]">
                        <h5 className="font-[700] text-slate-800 mb-[20px]">Documents</h5>
                        <div className="space-y-[10px]">
                            {['Commercial Register', 'Tax Certificate', 'National ID', 'Facility License'].map((doc, i) => (
                                <div key={i} className="flex justify-between items-center p-[12px] border border-[#f1f5f9] rounded-[12px]">
                                    <div className="flex items-center gap-[12px]">
                                        <CircleCheckBig size={20} className="text-green-500" />
                                        <div>
                                            <p className="text-[13px] font-[600] m-0 leading-tight">{doc}</p>
                                            <small className="text-[10px] text-[#94a3b8]">CR_Document_1234.pdf</small>
                                        </div>
                                    </div>
                                    <Eye size={18} className="text-[#94a3b8] cursor-pointer" onClick={() => openModal(doc)} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white border border-[#f1f5f9] rounded-[20px] p-[25px]">
                        <h5 className="font-[700] text-slate-800 mb-[20px]">Proposed Staff</h5>
                        <div className="space-y-[10px]">
                            {[{ name: "Sara Ahmed", role: "Senior Therapist" }, { name: "Sara Mohammed", role: "Spa Therapist" }].map((staff, i) => (
                                <div key={i} className="flex items-center gap-[12px] p-[10px] bg-[#f8fafc] rounded-[12px]">
                                    <div className="w-[40px] h-[40px] bg-[#e2e8f0] rounded-[10px] flex items-center justify-center font-bold">{staff.name[0]}</div>
                                    <div>
                                        <h6 className="text-[14px] font-[700] m-0">{staff.name}</h6>
                                        <p className="text-[12px] text-[#94a3b8] m-0">{staff.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedDoc && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={closeModal}>
                    <div className="bg-white w-[90%] max-w-[700px] rounded-[20px] overflow-hidden" onClick={e => e.stopPropagation()}>
                        <div className="px-[25px] py-[20px] border-b border-[#f1f5f9] flex justify-between items-center">
                            <div>
                                <h5 className="font-[700] text-[#101828] text-[18px]">{selectedDoc.name}</h5>
                                <small className="text-[#64748b]">{selectedDoc.fileName} • {selectedDoc.size}</small>
                            </div>
                            <button onClick={closeModal} className="text-[#94a3b8]"><X size={20} /></button>
                        </div>
                        <div className="p-[25px] bg-[#fcfdfe]">
                            <div className="bg-[#f1f5f9] rounded-[12px] p-[20px] flex justify-center mb-[20px]">
                                <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop" className="rounded-[8px] max-w-full shadow-md" alt="Preview" />
                            </div>
                            <div className="grid grid-cols-3 gap-[15px]">
                                <div className="bg-white p-[15px] border border-[#f1f5f9] rounded-[12px]">
                                    <label className="block text-[11px] text-[#94a3b8] mb-[5px]">Status</label>
                                    <span className="text-green-500 font-[600] flex items-center gap-1"><CheckCircle2 size={14} /> {selectedDoc.status}</span>
                                </div>
                                <div className="bg-white p-[15px] border border-[#f1f5f9] rounded-[12px]">
                                    <label className="block text-[11px] text-[#94a3b8] mb-[5px]">Upload Date</label>
                                    <span className="font-[600] text-[#101828]">{selectedDoc.date}</span>
                                </div>
                                <div className="bg-white p-[15px] border border-[#f1f5f9] rounded-[12px]">
                                    <label className="block text-[11px] text-[#94a3b8] mb-[5px]">File Size</label>
                                    <span className="font-[600] text-[#101828]">{selectedDoc.size}</span>
                                </div>
                            </div>
                        </div>
                        <div className="px-[25px] py-[20px] flex gap-[12px]">
                            <button className="flex-1 bg-[#1a56db] text-white py-[12px] rounded-[10px] font-[600] flex items-center justify-center gap-2">
                                <Download size={18} /> Download
                            </button>
                            <button className="bg-[#ef4444] text-white px-[25px] py-[12px] rounded-[10px] font-[600]" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReviewApplication;