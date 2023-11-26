import { addItem } from "../store/features/cartSlice";
import { Item } from "../store/features/itemSlice";
import { useAppDispatch } from "../store/store";
import Button from "./Button";

type Props = {
  item: Item;
};

const ItemCard = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex justify-center">
      <div className="grid h-auto w-60 grid-rows-3 overflow-hidden rounded-lg bg-orange-200 shadow-md">
        <img
          src={item.image}
          alt={item.name}
          className="row-span-2 h-full w-full"
        />
        <div className="grid-col row-span-1 grid gap-2 px-4 py-3">
          <div className="flex w-full flex-row justify-between gap-6">
            <p className="border-b border-orange-700">{item.name}</p>
            <p className="h-fit rounded-lg bg-orange-100 px-2 py-1 shadow-md">
              {item.type}
            </p>
          </div>
          <p className="ml-auto">{item.price} THB</p>
          <Button color="bg-green-500" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
