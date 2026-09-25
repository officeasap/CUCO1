import { useEffect, useState } from 'react'

import {
  listEnrollments,
  type EnrollmentWithProgram,
} from '@/lib/db/enrollments'
import { useSession } from '@/lib/auth/useSession'

export interface EnrollmentState {
  enrollments: EnrollmentWithProgram[]
  loading: boolean
  error: Error | null
}

export function useEnrollments(): EnrollmentState {
  const { session, loading: sessionLoading } = useSession()

  const [enrollments, setEnrollments] = useState<EnrollmentWithProgram[]>([])
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
      setEnrollments([])
      setError(null)
      setLoading(false)

      return () => {
        mounted = false
      }
    }

    setLoading(true)
    setError(null)

    void listEnrollments(session.user.id)
      .then((nextEnrollments) => {
        if (!mounted) {
          return
        }

        setEnrollments(nextEnrollments)
        setLoading(false)
      })
      .catch((nextError: unknown) => {
        if (!mounted) {
          return
        }

        setEnrollments([])
        setError(
          nextError instanceof Error
            ? nextError
            : new Error('Failed to load CUCO enrollments.'),
        )
        setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [session, sessionLoading])

  return {
    enrollments,
    loading,
    error,
  }
}