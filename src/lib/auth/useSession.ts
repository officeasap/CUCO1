import { useEffect, useState } from 'react'

import type { Session } from '@supabase/supabase-js'

import { authClient } from '@/lib/auth/client'

export interface SessionState {
  session: Session | null
  loading: boolean
}

export function useSession(): SessionState {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    void authClient.auth.getSession().then(({ data }) => {
      if (!mounted) {
        return
      }

      setSession(data.session)
      setLoading(false)
    })

    const {
      data: { subscription },
    } = authClient.auth.onAuthStateChange((_event, nextSession) => {
      if (!mounted) {
        return
      }

      setSession(nextSession)
      setLoading(false)
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  return {
    session,
    loading,
  }
}