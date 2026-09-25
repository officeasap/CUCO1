import { supabase } from '@/lib/db/client'
import type { Tables } from '@/types/database'

export type Payment = Tables<'payments'>

export async function listPayments(
  userId: string,
): Promise<Payment[]> {
  const { data, error } = await supabase
    .from('payments')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(`Failed to load payments: ${error.message}`)
  }

  return data ?? []
}

export async function listCompletedPayments(
  userId: string,
): Promise<Payment[]> {
  const { data, error } = await supabase
    .from('payments')
    .select('*')
    .eq('user_id', userId)
    .eq('status', 'completed')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(`Failed to load completed payments: ${error.message}`)
  }

  return data ?? []
}

export async function getPayment(
  paymentId: string,
  userId: string,
): Promise<Payment | null> {
  const { data, error } = await supabase
    .from('payments')
    .select('*')
    .eq('id', paymentId)
    .eq('user_id', userId)
    .maybeSingle()

  if (error) {
    throw new Error(`Failed to load payment: ${error.message}`)
  }

  return data
}

export async function listPaymentsForEnrollment(
  enrollmentId: string,
  userId: string,
): Promise<Payment[]> {
  const { data, error } = await supabase
    .from('payments')
    .select('*')
    .eq('enrollment_id', enrollmentId)
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(
      `Failed to load enrollment payments: ${error.message}`,
    )
  }

  return data ?? []
}