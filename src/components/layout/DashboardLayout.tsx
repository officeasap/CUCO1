import { Outlet } from 'react-router-dom'

import { LeftRail } from '@/components/layout/LeftRail'
import { RightRail } from '@/components/layout/RightRail'
import { TopBar } from '@/components/layout/TopBar'

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-smoked-powder text-text-on-substrate-primary">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <LeftRail />

        <div className="flex min-w-0 flex-1 flex-col">
          <TopBar />

          <div className="grid min-w-0 flex-1 grid-cols-1 xl:grid-cols-[minmax(0,1fr)_20rem]">
            <main className="min-w-0 px-4 py-6 md:px-6 md:py-8">
              <Outlet />
            </main>

            <RightRail />
          </div>
        </div>
      </div>
    </div>
  )
}
