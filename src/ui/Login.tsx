import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Head from "../components/Head";
import Button from "../components/Button";
import { useAppDispatch } from "../store/store";
import { loginUser } from "../store/features/userSlice";
import { useRef } from "react";
import Input from "../components/Input";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const username = useRef<string>("");
  const password = useRef<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await dispatch(
      loginUser({ username: username.current, password: password.current }),
    );

    if (result.payload.status === "success") navigate("/");
  };

  return (
    <form
      className="mx-auto flex h-[32rem] w-3/4 flex-col gap-10 overflow-auto rounded-md bg-stone-50 py-16 shadow-lg"
      onSubmit={handleSubmit}
    >
      <Head iconProp={faRightToBracket}>Login</Head>
      <div className="mx-auto flex w-3/4 flex-col gap-6">
        <Input
          userInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            (username.current = e.target.value)
          }
        >
          USERNAME
        </Input>
        <Input
          userInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            (password.current = e.target.value)
          }
          type={"password"}
        >
          PASSWORD
        </Input>
      </div>
      <Button type="submit" color="bg-green-500">
        Login
      </Button>
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
