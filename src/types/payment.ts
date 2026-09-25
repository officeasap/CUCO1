export type PaymentProvider = 'stripe' | 'crypto'

export type PaymentStatus =
  | 'pending'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'expired'
  | 'cancelled'

export interface Payment {
  id: string
  provider: PaymentProvider
  status: PaymentStatus
  amount: number
  currency: string
  reference: string | null
  createdAt: string
  updatedAt: string
}
