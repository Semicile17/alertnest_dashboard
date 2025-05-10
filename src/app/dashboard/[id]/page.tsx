'use client'

import Sidebar from '@/components/dashboard/Sidebar'
import QueryHeader from '@/components/dashboard/[id]/QueryHeader'
import ProfileCard from '@/components/dashboard/[id]/ProfileCard'
import OperatorSelector from '@/components/dashboard/[id]/OperatorSelector'
import EmergencyContacts from '@/components/dashboard/[id]/EmergencyContacts'
import UpdatesList from '@/components/dashboard/[id]/UpdatesList'
import MapView from '@/components/dashboard/[id]/MapView'

export default function Page() {
  return (
    <div className="font-sans flex h-screen w-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-1 p-6 overflow-y-auto ml-68 mt-16 bg-white">
        <div className="w-1/2 pr-6 space-y-6">
          <QueryHeader />
          <ProfileCard />
          <OperatorSelector />
          <EmergencyContacts />
          <UpdatesList />
        </div>

        <div className="w-1/2">
          <MapView />
        </div>
      </div>
    </div>
  )
}
