import { Outlet } from "react-router-dom";

import Header from "@/components/Header";

const MainLayout = () => {
  return (
    <div className="h-screen bg-[url('@/assets/background-image.png')] overflow-auto p-6">
      <div className="container m-auto">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
