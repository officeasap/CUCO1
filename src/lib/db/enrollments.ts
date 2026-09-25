import { supabase } from '@/lib/db/client'
import type { Tables } from '@/types/database'

export type Enrollment = Tables<'enrollments'>
export type EnrollmentProgram = Tables<'programs'>

export interface EnrollmentWithProgram extends Enrollment {
  program: EnrollmentProgram | null
}

export async function listEnrollments(
  userId: string,
): Promise<EnrollmentWithProgram[]> {
  const { data, error } = await supabase
    .from('enrollments')
    .select(`
      *,
      program:programs!enrollments_program_id_fkey(*)
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(`Failed to load enrollments: ${error.message}`)
  }

  return (data ?? []) as EnrollmentWithProgram[]
}

export async function listActiveEnrollments(
  userId: string,
): Promise<EnrollmentWithProgram[]> {
  const { data, error } = await supabase
    .from('enrollments')
    .select(`
      *,
      program:programs!enrollments_program_id_fkey(*)
    `)
    .eq('user_id', userId)
    .eq('status', 'active')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(
      `Failed to load active enrollments: ${error.message}`,
    )
  }

  return (data ?? []) as EnrollmentWithProgram[]
}

export async function getEnrollment(
  enrollmentId: string,
  userId: string,
): Promise<EnrollmentWithProgram | null> {
  const { data, error } = await supabase
    .from('enrollments')
    .select(`
      *,
      program:programs!enrollments_program_id_fkey(*)
    `)
    .eq('id', enrollmentId)
    .eq('user_id', userId)
    .maybeSingle()

  if (error) {
    throw new Error(`Failed to load enrollment: ${error.message}`)
  }

  return data as EnrollmentWithProgram | null
}