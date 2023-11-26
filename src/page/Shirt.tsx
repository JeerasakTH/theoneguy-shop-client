import ItemCard from "../components/ItemCard";
import { useAppSelector } from "../store/store";

const All = () => {
  const items = useAppSelector(({ item }) => item.item);
  const shirts = items.filter((item) => item.type === "shirt");

  return (
    <div className="grid w-full grid-cols-1 justify-around gap-14 px-6 py-6 md:grid-cols-2 lg:grid-cols-3">
      {shirts.map((item) => (
        <ItemCard item={item} key={item._id} />
      ))}
    </div>
  );
};

export default All;
