import ItemCard from "../components/ItemCard";
import { useAppSelector } from "../store/store";

const All = () => {
  const items = useAppSelector((state) => state.item.item);
  console.log(items);

  return (
    <div className="grid w-full grid-cols-1 justify-around gap-14 px-6 py-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ItemCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default All;
