import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-auto flex w-4/5 flex-col gap-8 overflow-hidden rounded-lg bg-orange-200 text-center text-xl leading-[5rem] text-black opacity-90 shadow-lg">
      <h1 className="font-medium">
        Welcome to <span className="font-extrabold">The One Guy</span> store.
      </h1>
      <h2>Where you can find the perfect outfit for every occasion.</h2>
      <Link to="/category/all" className="bg-coral font-medium">
        START
      </Link>
    </div>
  );
};

export default Home;
