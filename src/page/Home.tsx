import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="bg-shop relative flex h-screen w-full justify-center bg-cover">
      <div className="absolute top-1/2 mx-10 flex w-4/5 -translate-y-2/3 transform flex-col gap-8 overflow-hidden rounded-lg bg-stone-200 text-center text-xl leading-[5rem] text-black opacity-90 shadow-lg">
        <h1 className="font-medium">
          Welcome to <span className="font-extrabold">The One Guy</span> store.
        </h1>
        <h2>Where you can find the perfect outfit for every occasion.</h2>
        <Link to="/category/all" className="bg-coral">
          Start
        </Link>
      </div>
    </div>
  );
};

export default Home;
