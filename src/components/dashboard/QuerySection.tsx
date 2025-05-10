"use client"; 

import React from "react";
import { RefreshCcw, Info } from "lucide-react";
import { useRouter } from "next/navigation"; 


const queries = [
  { id: "q12hdyabn", status: "Not Allotted" },
  { id: "q12hdyabn", status: "Allotted" },
  { id: "q12hdyabn", status: "Not Allotted" },
  { id: "q12hdyabn", status: "Not Allotted" },
  { id: "q12hdyabn", status: "Not Allotted" },
  { id: "q12hdyabn", status: "Allotted" },
  { id: "q12hdyabn", status: "Not Allotted" },
  { id: "q12hdyabn", status: "Not Allotted" },
];

const QuerySection = () => {
  const router = useRouter();

  const handleInfoClick = (id: string) => {
    router.push(`/dashboard/${id}`); // Navigate to the dynamic route
  };

  return (
    <div className="p-6 font-[family-name:var(--font-urbanist)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">EMERGENCY QUERIES</h2>
        <div className="flex items-center gap-2 text-[#0e7c74] font-semibold">
          <span>168</span>
          <RefreshCcw size={18} className="cursor-pointer" />
        </div>
      </div>

      {/* Query List */}
      <div className="space-y-3">
        {queries.map((query, index) => (
          <div
            key={index}
            className="bg-[#00796B] text-white rounded-md px-4 py-2 flex justify-between items-center"
          >
            <span className="bg-white text-black font-semibold rounded px-2 py-1 text-sm">
              {query.id}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-black">
                {query.status}
              </span>
              <Info
                size={18}
                className="text-black cursor-pointer"
                onClick={() => handleInfoClick(query.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuerySection;
