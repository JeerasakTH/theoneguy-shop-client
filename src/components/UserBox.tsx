import { Link } from "react-router-dom";
import { useAppSelector } from "../store/store";

const UserBox = () => {
  const user = useAppSelector((state) => state.user.user.username);

  return (
    <div className="group relative w-24 rounded-t-md">
      <Link
        to="profile"
        className="flex items-center justify-center rounded-t-md bg-stone-100 px-4 py-1 text-stone-800"
      >
        {user}
      </Link>
      <ul className="absolute -z-10 w-full rounded-b-md bg-stone-100 py-2 pl-3 opacity-0 transition-all group-hover:z-50 group-hover:opacity-100">
        <li>
          <Link to="profile" className="text-stone-800">
            profile
          </Link>
        </li>
        <li>
          <Link to="cart" className="text-stone-800">
            cart
          </Link>
        </li>
        <li className="text-stone-800">
          <a href="">logout</a>
        </li>
      </ul>
    </div>
  );
};

export default UserBox;
