
import { supabase } from '@/lib/db/client'
import type { Tables, TablesInsert } from '@/types/database'

export type Profile = Tables<'profiles'>

export async function getProfile(
  userId: string,
): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle()

  if (error) {
    throw new Error(`Failed to load profile: ${error.message}`)
  }

  return data
}

export async function createProfile(input: {
  id: string
  email: string | null
  fullName: string
}): Promise<Profile> {
  const payload: TablesInsert<'profiles'> = {
    id: input.id,
    email: input.email,
    full_name: input.fullName.trim() || null,
    role: 'learner',
  }

  const { data, error } = await supabase
    .from('profiles')
    .upsert(payload, {
      onConflict: 'id',
    })
    .select('*')
    .single()

  if (error) {
    throw new Error(`Failed to create CUCO profile: ${error.message}`)
  }

  return data
}
