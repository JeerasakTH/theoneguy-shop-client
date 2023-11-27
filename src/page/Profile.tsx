import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import Head from "../components/Head";
import { useAppSelector } from "../store/store";

const Profile = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <div className="mx-auto flex h-[32rem] w-3/4 flex-col gap-10 overflow-auto rounded-md bg-stone-50 py-16 shadow-lg">
      <Head iconProp={faAddressCard}>Profile</Head>
      <div className="mx-auto flex w-3/4 flex-col gap-6">
        <p className="rounded-md bg-stone-300 px-4 py-3 text-sm shadow-sm md:px-10 md:text-base">
          Username: {user?.username}
        </p>
        <p className="rounded-md bg-stone-300 px-4 py-3 text-sm shadow-sm md:px-10 md:text-base">
          Password: {user?.password}
        </p>
        <p className="rounded-md bg-stone-300 px-4 py-3 text-sm shadow-sm md:px-10 md:text-base">
          Address: {user?.address}
        </p>
      </div>
    </div>
  );
};

export default Profile;
