import shirt1 from "../assets/shirt-1.jpg";

const Item = () => {
  return (
    <form className="grid h-96 w-72 grid-rows-3 overflow-hidden rounded-lg bg-orange-200 shadow-md">
      <img src={shirt1} alt="shirt-1" className="row-span-2 h-full w-full" />
      <div className="row-span-1 flex flex-col gap-2 px-4 py-3">
        <div className="flex w-full flex-row justify-between">
          <p className="border-b border-orange-700">Shirt-1</p>
          <p className="rounded-lg bg-orange-100 px-2 py-1 shadow-md">shirt</p>
        </div>
        <p className="ml-auto">345 THB</p>
        <button className="mx-auto w-40 rounded-lg bg-orange-400 px-2 py-1 shadow-md">
          Add to cart
        </button>
      </div>
    </form>
  );
};

export default Item;
