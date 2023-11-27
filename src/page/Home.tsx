import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect, useState } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const [link, setLink] = useState<string>("login");

  useEffect(() => {
    if (user) setLink("/category/all");
  }, [user, dispatch]);

  return (
    <div className="mx-auto flex w-4/5 flex-col gap-8 overflow-hidden rounded-lg bg-orange-200 text-center text-xl leading-[5rem] text-black opacity-90 shadow-lg">
      <h1 className="font-medium">
        Welcome to <span className="font-extrabold">The One Guy</span> store.
      </h1>
      <h2>Where you can find the perfect outfit for every occasion.</h2>
      <Link to={link} className="bg-coral font-medium">
        START
      </Link>
    </div>
  );
};

export default Home;
