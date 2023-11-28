import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

import { Cart, deleteItem } from "../store/features/cartSlice";
import { useAppDispatch } from "../store/store";

type Props = {
  item: Cart;
};

const CartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="mx-auto grid h-36 w-full grid-cols-5 items-center border-b border-stone-800">
        <img
          src={item.image}
          alt={item.image}
          className="col-span-1 h-full w-full"
        />
        <p className="col-span-2 ml-auto">{item.name}</p>
        <p className="col-span-1 ml-auto ">x{item.quantity}</p>
        <button
          className="col-span-1 mx-auto w-fit rounded-md bg-red-600 px-3 py-2"
          onClick={() => dispatch(deleteItem(item._id))}
        >
          <FontAwesomeIcon icon={faXmark} style={{ color: "#000000" }} />
        </button>
      </div>
    </>
  );
};

export default CartItem;
