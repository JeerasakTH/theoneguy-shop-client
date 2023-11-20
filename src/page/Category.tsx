import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Category = (props: Props) => {
  return (
    <div>
      Category
      <Outlet />
    </div>
  );
};

export default Category;
