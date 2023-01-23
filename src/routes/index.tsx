import { Route, Routes, Navigate } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'

export const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}
