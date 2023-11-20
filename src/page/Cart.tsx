import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <div className="mx-auto flex h-[32rem] w-3/4 flex-col overflow-auto rounded-md bg-stone-50 shadow-lg">
      <div className="mx-auto mb-6 mt-6 flex w-fit items-center gap-3 rounded-lg bg-stone-300 px-4 py-3 shadow-md">
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ color: "#5cb450" }}
          className="h-6 w-6"
        />
        <p>Cart</p>
      </div>
      <div className="grid-row-5 mx-auto grid h-3/4 w-3/4 overflow-hidden rounded-md shadow-lg">
        <div className="row-span-4 overflow-auto">
          <CartItem />
        </div>
        <div className="row-span-1 ml-auto flex flex-row items-center px-2 text-sm md:gap-3 md:px-4 md:py-3 md:text-base">
          <p className="bg-white px-3 py-2">Total: 345 THB</p>
          <button className="rounded-md bg-stone-200 px-3 py-2 shadow-lg">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
