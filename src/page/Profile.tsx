import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import Head from "../components/Head";

const Profile = () => {
  return (
    <div className="mx-auto flex h-[32rem] w-3/4 flex-col gap-10 overflow-auto rounded-md bg-stone-50 py-16 shadow-lg">
      <Head iconProp={faAddressCard}>Profile</Head>
      <div className="mx-auto flex w-3/4 flex-col gap-6">
        <p className="rounded-md bg-stone-300 px-4 py-3 text-sm shadow-sm md:px-10 md:text-base">
          Username: John
        </p>
        <p className="rounded-md bg-stone-300 px-4 py-3 text-sm shadow-sm md:px-10 md:text-base">
          Password: ********
        </p>
        <p className="rounded-md bg-stone-300 px-4 py-3 text-sm shadow-sm md:px-10 md:text-base">
          Address: 28 baker street london United State
        </p>
      </div>
    </div>
  );
};

export default Profile;
