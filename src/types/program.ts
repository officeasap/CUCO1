export type ProgramStatus = 'draft' | 'published' | 'archived'

export interface Program {
  id: string
  title: string
  slug: string
  description: string | null
  status: ProgramStatus
  createdAt: string
  updatedAt: string
}
