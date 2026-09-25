import { useEffect, useState } from 'react'

import { getProfile, type Profile } from '@/lib/db/profiles'
import { useSession } from '@/lib/auth/useSession'

export interface ProfileState {
  profile: Profile | null
  loading: boolean
  error: Error | null
}

export function useProfile(): ProfileState {
  const { session, loading: sessionLoading } = useSession()

  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let mounted = true

    if (sessionLoading) {
      setLoading(true)
      return () => {
        mounted = false
      }
    }

    if (!session?.user.id) {
      setProfile(null)
      setError(null)
      setLoading(false)

      return () => {
        mounted = false
      }
    }

    setLoading(true)
    setError(null)

    void getProfile(session.user.id)
      .then((nextProfile) => {
        if (!mounted) {
          return
        }

        setProfile(nextProfile)
        setLoading(false)
      })
      .catch((nextError: unknown) => {
        if (!mounted) {
          return
        }

        setProfile(null)
        setError(
          nextError instanceof Error
            ? nextError
            : new Error('Failed to load CUCO profile.'),
        )
        setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [session, sessionLoading])

  return {
    profile,
    loading,
    error,
  }
}