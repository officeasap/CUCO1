import type { NotificationAdapter } from '@/lib/notify'

export const supabaseSmtpNotificationAdapter: NotificationAdapter = {
  async send(_message) {
    throw new Error(
      'Supabase SMTP notifications are not implemented until the notification function and server configuration are defined.',
    )
  },
}
