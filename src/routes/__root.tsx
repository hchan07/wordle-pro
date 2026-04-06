import { Outlet, createRootRoute } from '@tanstack/react-router';


export const Route = createRootRoute({
  component: () => {
    return (
      <div className="flex bg-black min-h-screen p-4">      
        <Outlet />
      </div>
    )
  },
});
