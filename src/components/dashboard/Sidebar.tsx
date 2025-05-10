"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Users,
  CheckSquare,
  Settings,
  Network,
  LogOut,
  MapPin,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-1/6 font-[family-name:var(--font-urbanist)]  bg-[#0e4953] p-6 flex flex-col justify-between text-white fixed h-full">
      {/* Top Section */}
      <div className="text-center mt-16">
        <Avatar className="w-24 h-24 mx-auto">
          <AvatarImage src="https://india.policenewsplus.com/wp-content/uploads/2023/03/uttarakhand-350x250.jpg?v=1679976606" />
          <AvatarFallback>PP</AvatarFallback>
        </Avatar>

        <h2 className="mt-4 text-lg font-bold">Pauri Police Station</h2>
        <div className="flex items-center justify-center mt-1 text-sm gap-1">
          <MapPin className="w-4 h-4" />
          <span>Pauri , Uttarakhand</span>
        </div>
        <p className="mt-2 text-xs">Sld56w123e5t</p>

        {/* Menu Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <Button variant="ghost" className="bg-[#6fc3b2] text-white justify-start gap-2 w-full">
            <Users size={18} /> Operators
          </Button>
          <Button variant="ghost" className="bg-[#6fc3b2] text-white justify-start gap-2 w-full">
            <CheckSquare size={18} /> Solved
          </Button>
          <Button variant="ghost" className="bg-[#6fc3b2] text-white justify-start gap-2 w-full">
            <Network size={18} /> Services
          </Button>
          <Button variant="ghost" className="bg-[#6fc3b2] text-white justify-start gap-2 w-full">
            <Settings size={18} /> Settings
          </Button>
        </div>
      </div>

      {/* Logout */}
      <Button className="bg-red-700 hover:bg-red-800 mt-6 justify-start gap-2 text-white">
        <LogOut size={18} /> Logout
      </Button>
    </div>
  );
};

export default Sidebar;
