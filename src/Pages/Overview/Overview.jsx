import {
  DollarSign,
  Users,
  Building2,
  TrendingDown,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  LayoutDashboard,
} from "lucide-react";

const stats = [
  {
    label: "Total Revenue",
    value: "$48,520",
    growth: "+12.5%",
    color: "bg-gray-900",
    icon: <DollarSign size={22} />,
  },
  {
    label: "Active Users",
    value: "12,845",
    growth: "+8.2%",
    color: "bg-white",
    icon: <Users size={22} />,
  },
  {
    label: "Providers",
    value: "542",
    growth: "+4.1%",
    color: "bg-white",
    icon: <Building2 size={22} />,
  },
  {
    label: "Pending Requests",
    value: "24",
    growth: "-2.4%",
    color: "bg-white",
    icon: <TrendingDown size={22} />,
  },
];

const Overview = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8 font-sans animate-[fadeIn_.5s_ease-out_forwards]">
      {/* Header */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-gray-900 p-3 text-white shadow-sm">
            <LayoutDashboard size={22} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Dashboard Overview
            </h2>

            <p className="text-sm text-slate-500">
              Monitor and manage your platform performance
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-3xl border border-slate-100 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
              i === 0
                ? `bg-gradient-to-br ${stat.color}`
                : `${stat.color}`
            }`}
          >
            <div className="mb-6 flex items-center justify-between">
              <div
                className={`rounded-xl p-2 ${
                  i === 0
                    ? "bg-white/15 text-white"
                    : "bg-blue-50 text-blue-500"
                }`}
              >
                {stat.icon}
              </div>

              <span
                className={`flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-bold ${
                  i === 0
                    ? "bg-white/20 text-white"
                    : stat.growth.includes("+")
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {stat.growth.includes("+") ? (
                  <ArrowUpRight size={12} />
                ) : (
                  <TrendingDown size={12} />
                )}

                {stat.growth}
              </span>
            </div>

            <h3
              className={`text-3xl font-bold tracking-tight ${
                i === 0 ? "text-white" : "text-slate-900"
              }`}
            >
              {stat.value}
            </h3>

            <p
              className={`mt-1 text-sm font-medium ${
                i === 0 ? "text-white/70" : "text-slate-500"
              }`}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left */}
        <div className="space-y-6 lg:col-span-8">
          {/* Pending Approvals */}
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <h5 className="text-base font-semibold text-slate-700">
                Pending Approvals
              </h5>

              <button className="text-sm font-medium text-blue-600 transition hover:text-blue-700">
                View All
              </button>
            </div>

            <div className="px-6 pb-5">
              {[
                {
                  name: "Elite Medical Clinic",
                  sub: "Dr. Ahmed Mohammed • 8 services",
                  date: "Feb 3, 2026",
                  color: "#2563eb",
                },
                {
                  name: "Premium Barber Shop",
                  sub: "Mohammed Ali • 5 services",
                  date: "Feb 3, 2026",
                  color: "#f59e0b",
                },
                {
                  name: "Luxury Wellness Spa",
                  sub: "Sara Ahmed • 12 services",
                  date: "Feb 2, 2026",
                  color: "#10b981",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between ${
                    i !== 2 ? "border-b border-slate-50" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                      }}
                    >
                      <Building2 size={20} />
                    </div>

                    <div>
                      <h6 className="text-sm font-semibold text-slate-700">
                        {item.name}
                      </h6>

                      <p className="text-xs text-slate-500">{item.sub}</p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="mb-2 text-xs text-slate-400">{item.date}</p>

                    <button className="rounded-xl bg-blue-700 px-4 py-2 text-xs font-medium text-white transition hover:bg-blue-600">
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5">
              <h5 className="text-base font-semibold text-slate-700">
                Recent Activity
              </h5>
            </div>

            <div className="px-6 pb-5">
              {[
                {
                  title: "New provider approved",
                  sub: "Royal Spa Center",
                  time: "2 hours ago",
                  dot: "#22c55e",
                },
                {
                  title: "Subscription renewed",
                  sub: "Advanced Dental Clinic",
                  time: "4 hours ago",
                  dot: "#2563eb",
                },
                {
                  title: "Advertisement created",
                  sub: "Modern Cuts Barber",
                  time: "6 hours ago",
                  dot: "#9333ea",
                },
                {
                  title: "Provider suspended",
                  sub: "Old Service Center",
                  time: "8 hours ago",
                  dot: "#ef4444",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-4 py-4"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-2 h-2 w-2 rounded-full"
                      style={{ backgroundColor: item.dot }}
                    />

                    <div>
                      <h6 className="text-sm font-semibold text-slate-700">
                        {item.title}
                      </h6>

                      <p className="text-xs text-slate-500">{item.sub}</p>
                    </div>
                  </div>

                  <span className="whitespace-nowrap text-xs text-slate-400">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6 lg:col-span-4">
          {/* Quick Actions */}
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
            <div className="px-6 py-5 pb-2">
              <p className="text-sm font-medium text-slate-500">
                Quick Actions
              </p>
            </div>

            <div className="px-6 pb-5">
              {[
                { label: "Review Pending", badge: 8 },
                { label: "Manage Ads" },
                { label: "View Finance" },
                { label: "All Providers" },
              ].map((action, i) => (
                <div
                  key={i}
                  className="flex cursor-pointer items-center justify-between border-b border-slate-50 py-4 text-sm transition hover:text-blue-600"
                >
                  <span>{action.label}</span>

                  <div className="flex items-center gap-2">
                    {action.badge && (
                      <span className="rounded-md bg-orange-100 px-2 py-0.5 text-[11px] font-bold text-orange-500">
                        {action.badge}
                      </span>
                    )}

                    <ChevronRight
                      size={16}
                      className="text-slate-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5">
              <h5 className="text-sm font-medium text-slate-500">
                Provider Categories
              </h5>
            </div>

            <div className="px-6 pb-5">
              {[
                {
                  name: "Spa & Wellness",
                  val: 68,
                  rev: "$145,200",
                  color: "bg-cyan-500",
                },
                {
                  name: "Medical Clinics",
                  val: 54,
                  rev: "$128,900",
                  color: "bg-blue-500",
                },
                {
                  name: "Barber Shops",
                  val: 34,
                  rev: "$68,400",
                  color: "bg-orange-400",
                },
              ].map((cat, i) => (
                <div key={i} className="mt-5">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">
                      {cat.name}
                    </span>

                    <span className="text-sm font-semibold text-slate-500">
                      {cat.val}
                    </span>
                  </div>

                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={`h-full rounded-full ${cat.color}`}
                      style={{ width: `${cat.val}%` }}
                    />
                  </div>

                  <p className="mt-1 text-xs text-slate-400">
                    {cat.rev} revenue
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="rounded-2xl border border-green-100 bg-green-50 p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-600" size={24} />

              <div>
                <h6 className="font-medium text-slate-700">
                  System Status
                </h6>

                <p className="text-xs text-green-600">
                  All systems operational
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;