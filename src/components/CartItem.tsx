import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

import { Item } from "../store/features/itemSlice";

type Props = {
  item: Item;
};

const CartItem = ({ item }: Props) => {
  return (
    <>
      <div className="mx-auto grid h-36 w-full grid-cols-5 items-center border-b border-stone-800">
        <img
          src={item.picture}
          alt={item.picture}
          className="col-span-1 h-full w-full"
        />
        <p className="col-span-2 ml-auto">{item.name}</p>
        <p className="col-span-1 ml-auto ">x1</p>
        <button className="col-span-1 mx-auto w-fit rounded-md bg-red-600 px-3 py-2">
          <FontAwesomeIcon icon={faXmark} style={{ color: "#000000" }} />
        </button>
      </div>
    </>
  );
};

export default CartItem;
