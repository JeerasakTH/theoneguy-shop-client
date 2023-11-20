import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import shirt1 from "../assets/shirt-1.jpg";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

const CartItem = () => {
  return (
    <>
      <form className="mx-auto grid h-36 w-full grid-cols-5 items-center border-b border-stone-800">
        {/* <p className="h-full w-full bg-red-800"></p> */}
        <img src={shirt1} alt="Shirt-1" className="col-span-1 h-full w-full" />
        <p className="col-span-2 ml-auto">Shirt-1</p>
        <p className="col-span-1 ml-auto ">x1</p>
        <button className="col-span-1 mx-auto w-fit rounded-md bg-red-600 px-3 py-2">
          <FontAwesomeIcon icon={faXmark} style={{ color: "#000000" }} />
        </button>
      </form>
    </>
  );
};

export default CartItem;
