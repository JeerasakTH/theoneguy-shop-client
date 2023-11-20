import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
  return (
    <div className="mx-auto flex h-[32rem] w-3/4 flex-col gap-10 overflow-auto rounded-md bg-stone-50 shadow-lg">
      <div className="mx-auto mt-10 flex w-fit justify-center gap-3 rounded-lg bg-stone-300 px-4 py-3 shadow-md">
        <FontAwesomeIcon
          icon={faAddressCard}
          style={{ color: "#6b88bd" }}
          className="h-6 w-6"
        />
        <p>Profile</p>
      </div>
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
