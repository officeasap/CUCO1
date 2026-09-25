import type { NotificationAdapter } from '@/lib/notify'

export const noopNotificationAdapter: NotificationAdapter = {
  async send(_message) {
    return Promise.resolve()
  },
}
