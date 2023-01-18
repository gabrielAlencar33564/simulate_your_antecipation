import { Route, Routes, Navigate } from 'react-router-dom'

export const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
