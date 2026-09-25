export type AttendanceMode =
  | 'parallel'
  | 'collaboration'
  | 'convergence'

export type AttendanceStatus =
  | 'green'
  | 'yellow'
  | 'red'
  | 'withdrawn'

export interface AttendanceRecord {
  studentId: string
  sessionId: string
  mode: AttendanceMode
  status: AttendanceStatus
  weight: 1 | 2 | 3
}
