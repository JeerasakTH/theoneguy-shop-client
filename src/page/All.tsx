import Item from "../components/Item";

const All = () => {
  return (
    <div className="grid w-full grid-cols-1 justify-around gap-14 px-6 py-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex justify-center">
        <Item />
      </div>
      <div className="flex justify-center">
        <Item />
      </div>
      <div className="flex justify-center">
        <Item />
      </div>
      <div className="flex justify-center">
        <Item />
      </div>
      <div className="flex justify-center">
        <Item />
      </div>
    </div>
  );
};

export default All;
