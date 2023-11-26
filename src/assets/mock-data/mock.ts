import shirt1 from "./shirt-1.jpg";
import shirt2 from "./shirt-2.jpg";
import shirt3 from "./shirt-3.jpg";
import shirt4 from "./shirt-4.jpg";
import shirt5 from "./shirt-5.jpg";

interface Item {
  id: number;
  name: string;
  type: string;
  price: number;
  picture: string;
}

export const item: Item[] = [
  {
    id: 1,
    name: "shirt-1 abc ded",
    type: "shirt",
    price: 123,
    picture: "https://img2.pic.in.th/pic/shirt-1.jpeg",
  },
  {
    id: 2,
    name: "shirt-2",
    type: "shirt",
    price: 123,
    picture: shirt2,
  },
  {
    id: 3,
    name: "shirt-3",
    type: "shirt",
    price: 123,
    picture: shirt3,
  },
  {
    id: 3,
    name: "shirt-4",
    type: "shirt",
    price: 123,
    picture: shirt4,
  },
  {
    id: 5,
    name: "shirt-5",
    type: "shirt",
    price: 125,
    picture: shirt5,
  },
];
