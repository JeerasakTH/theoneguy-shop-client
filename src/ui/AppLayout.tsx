import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

type Props = {};

const AppLayout = (props: Props) => {
  return (
    <div className="h-screen w-full overflow-hidden bg-ivory">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
