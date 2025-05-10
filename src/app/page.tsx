"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/dashboard/Header";

export default function Home() {
  const [serviceId, setServiceId] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (serviceId.trim()) {
      // Replace this with actual login routing logic
      router.push(`/dashboard`);
    }
  };

  return (
    <>
      <Header />
      <div className="w-screen font-[family-name:var(--font-urbanist)] h-screen flex justify-center items-center flex-col">
        {/* Main Logo */}
        <div className="mt-16 mb-10">
          <Image src="/shield_icon.png" alt="Shield" width={120} height={120} />
        </div>

        {/* Service ID Input */}
        <div className="flex items-center border-b border-green-400 py-2 w-full max-w-xs">
          <input
            type="text"
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
            placeholder="Service Id"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <button
            onClick={handleLogin}
            className="flex-shrink-0 bg-teal-700 hover:bg-teal-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Register Link */}
        <p className="mt-8 text-green-600 font-medium text-sm hover:underline cursor-pointer">
          Register on Us
        </p>
      </div>
    </>
  );
}
