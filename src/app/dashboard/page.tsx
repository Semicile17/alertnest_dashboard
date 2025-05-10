import Map from "@/components/dashboard/Map";
import QuerySection from "@/components/dashboard/QuerySection";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="w-screen h-screen ">
      <div className="w-screen h-full flex ">
        <Sidebar />
        <div className="w-full ml-64 mt-16">
           <Map/>
           <div className="w-full ">
               <QuerySection/>
           </div>
        </div>
      </div>
    </div>
  );
};

export default page;
