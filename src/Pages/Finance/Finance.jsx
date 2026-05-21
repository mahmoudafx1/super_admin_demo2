import React, { useState } from 'react';
import { Filter, Download, ArrowUpRight, Calendar, DollarSign, TrendingUp } from 'lucide-react';

const FinancePage = () => {
    const [timeFilter, setTimeFilter] = useState('This Month');
    const [activeSubTab, setActiveSubTab] = useState('trend');

    const getStatsByFilter = () => {
        switch (timeFilter) {
            case 'Today': return { rev: '1.2k', book: '45', profit: '980', growth: '+2.1%' };
            case 'This Week': return { rev: '12.5k', book: '420', profit: '10.2k', growth: '+5.4%' };
            case 'This Year': return { rev: '1.2M', book: '52.4k', profit: '940k', growth: '+22.5%' };
            default: return { rev: '342.5k', book: '15,430', profit: '291.1k', growth: '+18.7%' };
        }
    };

    const currentStats = getStatsByFilter();

    const revenueData = [
        { month: 'Jan', bookings: 498, amount: '$62,450', width: '70%' },
        { month: 'Feb', bookings: 542, amount: '$68,950', width: '85%' },
        { month: 'Mar', bookings: 568, amount: '$71,200', width: '95%' },
    ];

    return (
        <div className="p-[30px] bg-[#fcfdfe] min-h-screen font-sans animate-in fade-in duration-500">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div className="flex items-center gap-4">
                    <div className="bg-[#111827] text-white p-3 rounded-[14px]">
                        <DollarSign size={22} />
                    </div>
                    <div>
                        <h2 className="text-[24px] font-bold text-[#1e293b] leading-tight">Financial Overview</h2>
                        <p className="text-[#64748b] text-[14px]">Track your earnings and expenses</p>
                    </div>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-[#e2e8f0] px-5 py-2.5 rounded-[12px] font-semibold text-[#1e293b] hover:bg-gray-50 transition-colors">
                        <Filter size={18} /> Filter
                    </button>
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#111827] text-white px-5 py-2.5 rounded-[12px] font-semibold hover:bg-black transition-colors">
                        <Download size={18} /> Export
                    </button>
                </div>
            </div>

            {/* Time Filter Pills */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
                {['Today', 'This Week', 'This Month', 'This Year'].map(t => (
                    <button
                        key={t}
                        onClick={() => setTimeFilter(t)}
                        className={`px-6 py-2.5 rounded-[12px] text-[14px] font-medium transition-all whitespace-nowrap
                        ${timeFilter === t
                                ? 'bg-[#111827] text-white shadow-lg shadow-black/10'
                                : 'bg-white text-[#64748b] border border-[#e2e8f0] hover:border-[#111827]'}`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Main Revenue Card (Gradient) */}
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-7 rounded-[24px] text-white shadow-xl shadow-blue-900/10 relative overflow-hidden group">
                    <div className="flex justify-between items-center mb-6">
                        <div className="bg-white/15 p-2 rounded-[10px]"><DollarSign size={20} /></div>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-[12px] flex items-center gap-1">
                            <ArrowUpRight size={12} /> {currentStats.growth}
                        </span>
                    </div>
                    <div className="relative z-10">
                        <small className="text-white/70 font-bold tracking-widest text-[10px] uppercase">Total Revenue</small>
                        <div className="flex items-baseline gap-2">
                            <h2 className="text-[40px] font-bold tracking-tighter my-1">{currentStats.rev}</h2>
                            <span className="text-white/60 font-medium">EGP</span>
                        </div>
                    </div>
                    {/* Decorative Circle */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                </div>

                {/* Providers Card */}
                <div className="bg-white p-7 rounded-[24px] border border-[#f1f5f9] shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div className="bg-[#eff6ff] text-[#3b82f6] p-2 rounded-[10px]"><Calendar size={20} /></div>
                    </div>
                    <small className="text-[#94a3b8] font-bold tracking-widest text-[10px] uppercase">Total Bookings</small>
                    <h2 className="text-[40px] font-bold tracking-tighter text-[#111827] my-1">{currentStats.book}</h2>
                    <p className="text-[#64748b] text-[14px]">Appointments</p>
                </div>

                {/* Profit Card */}
                <div className="bg-white p-7 rounded-[24px] border border-[#f1f5f9] shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div className="bg-[#fff7ed] text-[#f97316] p-2 rounded-[10px]"><TrendingUp size={20} /></div>
                    </div>
                    <small className="text-[#94a3b8] font-bold tracking-widest text-[10px] uppercase">Net Profit</small>
                    <h2 className="text-[40px] font-bold tracking-tighter text-[#111827] my-1 flex items-baseline gap-2">
                        {currentStats.profit}
                        <span className="text-[#64748b] text-lg font-medium">
                            EGP
                        </span>
                    </h2>
                    <p className="text-[#64748b] text-[14px]">After fees</p>
                </div>
            </div>

            {/* Sub Tabs Navigation */}
            <div className="bg-[#f1f5f9] p-1.5 rounded-[16px] w-fit flex gap-1 mb-8">
                <button
                    onClick={() => setActiveSubTab('trend')}
                    className={`px-6 py-2.5 rounded-[12px] text-[14px] font-bold transition-all
                    ${activeSubTab === 'trend' ? 'bg-[#1e40af] text-white shadow-md' : 'text-[#64748b] hover:text-[#1e293b]'}`}
                >
                    Revenue Trend
                </button>
                <button
                    onClick={() => setActiveSubTab('payments')}
                    className={`px-6 py-2.5 rounded-[12px] text-[14px] font-bold transition-all
                    ${activeSubTab === 'payments' ? 'bg-[#1e40af] text-white shadow-md' : 'text-[#64748b] hover:text-[#1e293b]'}`}
                >
                    Provider Payments
                </button>
            </div>

            {/* Content Area */}
            <div className="bg-white border border-[#f1f5f9] rounded-[28px] p-8 shadow-sm animate-in slide-in-from-bottom-4 duration-700">
                {activeSubTab === 'trend' ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Bars Section */}
                        <div className="lg:col-span-2">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-[#1e293b]">Revenue Analysis</h3>
                                <p className="text-[#64748b] text-[14px]">Performance over the last 3 months</p>
                            </div>
                            <div className="space-y-8">
                                {revenueData.map((d, i) => (
                                    <div key={i} className="flex items-center gap-6">
                                        <div className="w-[80px]">
                                            <span className="font-bold text-[#1e293b] block">{d.month}</span>
                                            <span className="text-[11px] text-[#94a3b8]">{d.bookings} bks</span>
                                        </div>
                                        <div className="flex-1 h-9 bg-[#f1f5f9] rounded-lg overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-lg transition-all duration-1000 ease-out"
                                                style={{ width: d.width }}
                                            ></div>
                                        </div>
                                        <div className="w-[80px] text-right font-bold text-[#1e293b]">{d.amount}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Top Services Sidebar */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                                Top Services <span className="text-xl">🏆</span>
                            </h3>
                            {[
                                { rank: "#1", title: "Premium Massage", price: "$24,680", bks: "164", grad: "from-blue-500 to-blue-400" },
                                { rank: "#2", title: "Dental Care", price: "$18,950", bks: "128", grad: "from-blue-400 to-blue-300" },
                                { rank: "#3", title: "Hair Styling", price: "$15,200", bks: "95", grad: "from-blue-300 to-blue-200" },
                            ].map((s, i) => (
                                <div key={i} className={`p-5 rounded-[20px] bg-gradient-to-r ${s.grad} text-white shadow-md hover:scale-[1.02] transition-transform cursor-default`}>
                                    <div className="flex justify-between items-start">
                                        <span className="bg-white/20 w-8 h-8 flex items-center justify-center rounded-lg font-bold text-[12px]">{s.rank}</span>
                                        <small className="text-white/80 font-medium">{s.bks} Bookings</small>
                                    </div>
                                    <div className="mt-4">
                                        <p className="font-bold text-lg">{s.title}</p>
                                        <p className="text-2xl font-black">{s.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    /* Table Section */
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-[#f1f5f9]">
                                    <th className="text-left py-4 px-4 text-[#94a3b8] font-bold text-[12px] uppercase tracking-wider">Provider</th>
                                    <th className="text-left py-4 px-4 text-[#94a3b8] font-bold text-[12px] uppercase tracking-wider">Email</th>
                                    <th className="text-left py-4 px-4 text-[#94a3b8] font-bold text-[12px] uppercase tracking-wider">Join Date</th>
                                    <th className="text-left py-4 px-4 text-[#94a3b8] font-bold text-[12px] uppercase tracking-wider">Revenue</th>
                                    <th className="text-right py-4 px-4 text-[#94a3b8] font-bold text-[12px] uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#f8fafc]">
                                {[...Array(6)].map((_, i) => (
                                    <tr key={i} className="hover:bg-[#fcfdfe] transition-colors group">
                                        <td className="py-5 px-4">
                                            <div className="flex items-center gap-3">
                                                <img src={`https://i.pravatar.cc/150?u=${i + 20}`} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" alt="" />
                                                <span className="font-bold text-[#1e293b]">Royal Spa Center</span>
                                            </div>
                                        </td>
                                        <td className="py-5 px-4 text-[#64748b]">sara@example.com</td>
                                        <td className="py-5 px-4 text-[#64748b]">May 12, 2026</td>
                                        <td className="py-5 px-4 font-bold text-[#1e293b]">35.52 K-EG</td>
                                        <td className="py-5 px-4 text-right">
                                            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[11px] font-bold uppercase">Paid</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FinancePage;