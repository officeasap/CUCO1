import { createClient } from '@supabase/supabase-js'

import type { Database } from '@/types/database'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

function requireEnvironment(
  name: 'VITE_SUPABASE_URL' | 'VITE_SUPABASE_ANON_KEY',
  value: string | undefined,
): string {
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}. Configure it before using the auth client.`,
    )
  }

  return value
}

export const authClient = createClient<Database>(
  requireEnvironment('VITE_SUPABASE_URL', supabaseUrl),
  requireEnvironment('VITE_SUPABASE_ANON_KEY', supabaseAnonKey),
)
