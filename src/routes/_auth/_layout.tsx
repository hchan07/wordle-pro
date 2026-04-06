// src/routes/_auth/_auth.tsx
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: () => (
    <div className="flex justify-center md:items-center grow">
      <Outlet /> 
    </div>
  ),
})

