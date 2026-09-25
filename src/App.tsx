
import { Navigate, Route, Routes } from 'react-router-dom'

import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { ScrollToTop } from '@/components/routing/ScrollToTop'
import { Dashboard } from '@/pages/dashboard/Dashboard'
import {
  Attendance,
  Assignments,
  Certificate,
  Cohort,
  Journal,
  LiveRoom,
  Questions,
  Recordings,
  Rehearsal,
  Scores,
  Scripts,
} from '@/pages/dashboard/DashboardModules'
import { Login } from '@/pages/auth/Login'
import { Signup } from '@/pages/auth/Signup'
import { NotFound } from '@/pages/NotFound'
import { Contact } from '@/pages/public/Contact'
import { Courses } from '@/pages/public/Courses'
import { Home } from '@/pages/public/Home'
import { Instructors } from '@/pages/public/Instructors'
import { OurStory } from '@/pages/public/OurStory'
import { VerticalSeries } from '@/pages/public/VerticalSeries'
import { PublicLayout } from '@/layouts/PublicLayout'

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="vertical-series" element={<VerticalSeries />} />
          <Route path="contact" element={<Contact />} />

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="home" element={<Navigate to="/" replace />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/live" element={<LiveRoom />} />
            <Route path="dashboard/scripts" element={<Scripts />} />
            <Route
              path="dashboard/assignments"
              element={<Assignments />}
            />
            <Route path="dashboard/journal" element={<Journal />} />
            <Route
              path="dashboard/rehearsal"
              element={<Rehearsal />}
            />
            <Route path="dashboard/scores" element={<Scores />} />
            <Route
              path="dashboard/attendance"
              element={<Attendance />}
            />
            <Route
              path="dashboard/questions"
              element={<Questions />}
            />
            <Route path="dashboard/cohort" element={<Cohort />} />
            <Route
              path="dashboard/recordings"
              element={<Recordings />}
            />
            <Route
              path="dashboard/certificate"
              element={<Certificate />}
            />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App