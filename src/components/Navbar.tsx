import React from "react";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="grid grid-cols-3 justify-between border-b border-plum bg-coral px-8 py-2 text-stone-200">
      <a
        href="/"
        className="flex w-fit items-center justify-center rounded-full bg-orange-200 px-2 py-1 text-stone-800"
      >
        T.O.G Store
      </a>
      <div className="w-full rounded-md bg-orange-800 px-4 py-2">
        <ul className="flex items-center justify-between">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="group relative px-2">
            <Link to="/category/all">Category</Link>
            <ul className="duration-2000 absolute left-0 z-50 w-full rounded-md bg-orange-800 py-2 pl-3 opacity-0 transition-all group-hover:opacity-100">
              <li>
                <Link to="category/all">All</Link>
              </li>
              <li>
                <Link to="category/shirt">Shirt</Link>
              </li>
              <li>
                <Link to="category/trouser">Trouser</Link>
              </li>
              <li>
                <Link to="category/shoe">Shoe</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="about-us">About us</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-center justify-end gap-8">
        <div className="group relative w-1/5 rounded-t-md">
          <Link
            to="profile"
            className="flex items-center justify-center rounded-t-md bg-stone-50 px-2 py-1 text-stone-800"
          >
            John
          </Link>
          <ul className="absolute z-50 w-full rounded-b-md bg-stone-50 py-2 pl-3 opacity-0 transition-all group-hover:opacity-100">
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
      </div>
    </div>
  );
};

export default Navbar;
