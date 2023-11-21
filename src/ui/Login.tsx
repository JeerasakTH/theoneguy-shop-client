import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import Head from "../components/Head";
import Button from "../components/Button";

const Login = () => {
  return (
    <form className="mx-auto flex h-[32rem] w-3/4 flex-col gap-10 overflow-auto rounded-md bg-stone-50 py-16 shadow-lg">
      <Head iconProp={faRightToBracket}>Login</Head>
      <div className="mx-auto flex w-3/4 flex-col gap-6">
        <Input>USERNAME</Input>
        <Input>PASSWORD</Input>
      </div>
      <Button color="bg-green-500">Login</Button>
      <Link
        to="/signup"
        className="mx-auto border-indigo-600 text-center text-sm text-indigo-600 hover:border-b"
      >
        Signup
      </Link>
    </form>
  );
};

export default Login;
