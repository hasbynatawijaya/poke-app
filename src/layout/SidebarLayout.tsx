import { Outlet } from "react-router-dom";

const SidebarLayout = () => {
  return (
    <div className="flex h-screen bg-red-500">
      <div className="w-1/4 bg-slate-400">Sidebar here</div>
      <div className="flex-1 bg-blue-500">
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
