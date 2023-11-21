import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <div className="h-screen w-full min-w-[500px]">
      <Navbar />
      <div className="mx-auto flex min-h-[calc(100vh-3.5rem)] w-full items-center border-x-2 border-stone-200 bg-ivory shadow-md md:w-4/6">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
