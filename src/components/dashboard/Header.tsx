'use client'

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Forward } from 'lucide-react'

const Header = () => {
  const pathname = usePathname()
  const isDashboard = pathname.startsWith('/dashboard')

  // Extract the ID after "/dashboard/"
  const dashboardId = isDashboard ? pathname.split('/')[2] : null

  return (
    <header className="font-[family-name:var(--font-urbanist)] bg-[#60a585] w-full h-16 flex justify-between p-6 fixed z-10">
      {/* Logo */}
      <Image
        src="/logo.svg"
        alt="logo"
        width={200}
        height={200}
        className="h-10 -top-2 relative"
      />

      {/* Links */}
      <div className="h-full flex items-center gap-2 text-white font-medium">
        {isDashboard && (
          <>
            DASHBOARD
            {dashboardId && (
              <>
                <span className="mx-1">{<Forward/>}</span>
                <span>{dashboardId}</span>
              </>
            )}
          </>
        )}
      </div>
    </header>
  )
}

export default Header
