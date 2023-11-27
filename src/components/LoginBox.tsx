import { Link } from "react-router-dom";

const LoginBox = () => {
  return (
    <div className="group relative w-24 rounded-t-md">
      <Link
        to="login"
        className="flex items-center justify-center rounded-t-md bg-stone-50 px-4 py-1 text-stone-800"
      >
        Login
      </Link>
    </div>
  );
};

export default LoginBox;
