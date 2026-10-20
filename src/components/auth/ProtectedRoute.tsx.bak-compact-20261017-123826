
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useSession } from '@/lib/auth/useSession'

export function ProtectedRoute() {
  const { session, loading } = useSession()
  const location = useLocation()

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-smoked-powder px-6 text-text-on-substrate-primary">
        <div className="rounded-card bg-smoked-card px-8 py-7 text-center shadow-raised">
          <p className="cuco-kicker text-text-on-card-secondary">
            CUCO AUTHENTICATION
          </p>

          <p className="mt-3 text-sm text-text-on-card-primary">
            Checking your session...
          </p>
        </div>
      </main>
    )
  }

  if (!session) {
    return (
      <Navigate
        replace
        state={{ from: location.pathname }}
        to="/login"
      />
    )
  }

  return <Outlet />
}
