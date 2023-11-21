import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "../components/CartItem";
import { useAppSelector } from "../store/store";
import Head from "../components/Head";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  console.log(cart);

  return (
    <div className="mx-auto flex h-[36rem] w-3/4 flex-col gap-4 overflow-auto rounded-md bg-stone-50 py-16 shadow-lg">
      <Head iconProp={faCartShopping}>Cart</Head>
      <div className="grid-row-5 mx-auto grid h-full w-3/4 overflow-hidden rounded-md shadow-lg">
        <div className="row-span-4 overflow-auto">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
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
