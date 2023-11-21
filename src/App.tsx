import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./ui/Error";
import AppLayout from "./ui/AppLayout";
import Signup from "./ui/Signup";
import Category from "./page/Category";
import Cart from "./page/Cart";
import AboutUs from "./page/AboutUs";
import Shirt from "./page/Shirt";
import Trouser from "./page/Trouser";
import Shoe from "./page/Shoe";
import Home from "./page/Home";
import All from "./page/All";
import Profile from "./page/Profile";
import Login from "./ui/Login";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/category",
        element: <Category />,
        children: [
          { path: "all", element: <All /> },
          { path: "shirt", element: <Shirt /> },
          { path: "trouser", element: <Trouser /> },
          { path: "shoe", element: <Shoe /> },
        ],
      },
      { path: "cart", element: <Cart /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
