import { supabase } from '@/lib/db/client'
import type { Tables } from '@/types/database'

export type Program = Tables<'programs'>

export async function listPrograms(): Promise<Program[]> {
  const { data, error } = await supabase
    .from('programs')
    .select('*')
    .eq('status', 'published')
    .order('created_at', { ascending: true })

  if (error) {
    throw new Error(`Failed to load programs: ${error.message}`)
  }

  return data ?? []
}

export async function getProgramBySlug(
  slug: string,
): Promise<Program | null> {
  const { data, error } = await supabase
    .from('programs')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle()

  if (error) {
    throw new Error(`Failed to load program: ${error.message}`)
  }

  return data
}