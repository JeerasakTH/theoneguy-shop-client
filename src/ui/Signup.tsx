import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import Head from "../components/Head";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Signup = () => {
  return (
    <form className="mx-auto flex h-[36rem] w-3/4 flex-col gap-10 overflow-auto rounded-md bg-stone-50 py-16 shadow-lg">
      <Head iconProp={faRightToBracket}>Signup</Head>
      <div className="mx-auto flex w-3/4 flex-col gap-6">
        <Input placeholderProp="test" disabledProp={true}>
          USERNAME
        </Input>
        <Input placeholderProp="test1234" disabledProp={true}>
          PASSWORD
        </Input>
        <Input placeholderProp="123 London UK." disabledProp={true}>
          ADDRESS
        </Input>
      </div>
      <Link to="/login" className="mx-auto">
        <Button color="bg-green-500">Signup</Button>
      </Link>
      <Link
        to="/login"
        className="mx-auto border-indigo-600 text-center text-sm text-indigo-600 hover:border-b"
      >
        Login
      </Link>
    </form>
  );
};

export default Signup;
