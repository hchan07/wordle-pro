// src/routes/_auth/_auth.tsx
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: () => (
    <div className="auth-layout">
      <h1>Wordle Pro Auth</h1>
      <Outlet /> 
    </div>
  ),
})