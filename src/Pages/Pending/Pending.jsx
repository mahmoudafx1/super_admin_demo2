import React, { useState, useEffect } from 'react';
import { Search, Eye, MapPin,  CheckSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getApplications } from "../../API/applicationApi";
import eruda from "eruda";


function Pending() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      eruda.init();
    }
    getApplications("PENDING_APPROVAL")
      .then((res) => {
        setApplications(res?.data?.data || []);
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  const filteredData = (applications || []).filter((item) => {
    const matchesSearch =
      item.owner_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.business_name?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      activeFilter === "All" ||
      item.category === activeFilter.toUpperCase();

    return matchesSearch && matchesFilter;
  });

  const categoryColors = {
    CLINIC: "bg-[#2e90fa]",
    BARBER: "bg-[#f79009]",
    SPA: "bg-[#ee46bc]"
  };

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading applications...
      </div>
    );
  }

  return (
    <div className="p-4 bg-[#fcfcfc] min-h-screen animate-[fadeIn_0.4s_ease-in]">

      
      {/* Header */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-blue-600 p-3 text-white shadow-sm">
            
            <CheckSquare size={22} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Pending Approvals
            </h2>

            <p className="text-sm text-slate-500">
              Review and approve new provider applications
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {["All", "Spa", "Clinic", "Barber"].map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${activeFilter === category
              ? "bg-[#2563eb] text-white border-[#2563eb]"
              : "bg-white text-[#667085] border-[#eaecf0] hover:bg-gray-50"
              }`}
          >
            {category}
            <span className={`ml-2 px-1.5 py-0.5 rounded text-[12px] ${activeFilter === category
              ? "bg-white/20 text-white"
              : "bg-[#f2f4f7] text-[#667085]"
              }`}>
              {category === "All"
                ? applications.length
                : applications.filter(p => p.category === category.toUpperCase()).length}
            </span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-sm mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#98a2b3]" size={18} />
        <input
          type="text"
          placeholder="Search applications..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#eaecf0] focus:ring-2 focus:ring-blue-100 focus:border-[#2563eb] outline-none transition-all placeholder:text-[#98a2b3]"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredData.length > 0 ? filteredData.map((app) => (
          <div key={app.id} className="group bg-white rounded-2xl border border-[#eaecf0] overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-300 flex flex-col">

            {/* Image */}
            <div className="relative h-44 overflow-hidden">
              <img
                src={app.image || "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"}
                alt={app.owner_name}
                className="w-full h-full object-cover"
              />

              <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-semibold text-white ${categoryColors[app.category]}`}>
                {app.category}
              </span>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col flex-grow">
              <h5 className="text-[1.1rem] font-bold text-[#101828] mb-1">
                {app.business_name}
              </h5>

              <p className="text-sm text-[#667085] mb-4">
                {app.owner_name}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">

                <span className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[12px] font-medium bg-[#eff8ff] text-[#2e90fa]">
                  <MapPin size={12} />
                  {app.city} - {app.district}
                </span>

                <span className="px-2.5 py-1 rounded-md text-[12px] font-medium bg-[#ecfdf3] text-[#12b76a]">
                  {app.email}
                </span>

                <span className="px-2.5 py-1 rounded-md text-[12px] font-medium bg-[#fffaeb] text-[#f79009]">
                  {app.status}
                </span>

              </div>

              {/* Details */}
              <div className="space-y-2 mb-6 text-[12.5px]">
                <div className="flex justify-between text-[#667085]">
                  <span>Phone:</span>
                  <span className="text-[#101828] font-medium">{app.phone}</span>
                </div>

                <div className="flex justify-between text-[#667085]">
                  <span>Submitted:</span>
                  <span className="text-[#101828] font-medium">
                    {new Date(app.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() => navigate(`/pending/${app.id}`)}
                className="mt-auto w-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
              >
                <Eye size={18} /> Review Application
              </button>
            </div>
          </div>
        )) : (
          <div className="col-span-full text-center py-12">
            <h4 className="text-[#667085] text-lg">
              No applications found matching your search.
            </h4>
          </div>
        )}

      </div>
    </div>
  );
}

export default Pending;