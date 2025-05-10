"use client"; // Only if using App Router

import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px", // Adjust as needed
};

const center = {
  lat: 28.6139, // Example: New Delhi latitude
  lng: 77.2090, // Example: New Delhi longitude
};

const Map = () => {
  return (
    <div className="m-4 border border-[#60a585]">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {/* You can add markers or overlays here */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
