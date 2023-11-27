import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { fetchItem } from "../store/features/itemSlice";
import { useAppDispatch } from "../store/store";

import Navbar from "../components/Navbar";
import { fetchUser } from "../store/features/userSlice";

const AppLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = () => {
      try {
        dispatch(fetchItem());
        dispatch(fetchUser());
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

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
