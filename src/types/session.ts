export interface UserSession {
  id: string
  userId: string
  expiresAt: string
}

export interface AuthenticatedUser {
  id: string
  email: string
  fullName: string | null
  avatarUrl: string | null
}
