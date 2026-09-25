export interface NotificationMessage {
  recipient: string
  subject: string
  body: string
}

export interface NotificationAdapter {
  send(message: NotificationMessage): Promise<void>
}

export { noopNotificationAdapter } from '@/lib/notify/noop'
