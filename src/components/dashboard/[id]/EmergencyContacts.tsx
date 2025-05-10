"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const emergencyNumbers = [
  { label: "+91 9548086912", value: "contact1" },
  { label: "+91 9548086913", value: "contact2" },
  { label: "+91 9548086914", value: "contact3" },
];

const EmergencyContacts = () => {
  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  const selectedLabel =
    emergencyNumbers.find((contact) => contact.value === selectedContact)
      ?.label || null;

  return (
    <div className="flex gap-2 items-center">
      <Select onValueChange={setSelectedContact}>
        <SelectTrigger className="w-2/5 font-[family-name:var(--font-urbanist)] bg-[#dcfce7] text-black px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span>{selectedLabel || "Emergency Contacts"}</span>
          </div>
        </SelectTrigger>

        <SelectContent className="font-[family-name:var(--font-urbanist)]">
          {emergencyNumbers.map((contact) => (
            <SelectItem key={contact.value} value={contact.value}>
              {contact.label}
            </SelectItem>
          ))}
        </SelectContent>
        {selectedLabel && (
          <Button variant="outline" className="w-11 h-9">
            <a
              href={`tel:${selectedLabel.replace(/\s+/g, "")}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Phone className="w-3 h-3 text-green-600 hover:text-green-700" />
            </a>
          </Button>
        )}
      </Select>
    </div>
  );
};

export default EmergencyContacts;
