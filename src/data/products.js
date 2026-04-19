import basicTshirt from "../assets/p1.jpg"
import denimjacket from "../assets/p2.jpg"
import sneakers from "../assets/p3.jpg"

const products = [
  {
    id: 1,
    name: "Basic T-Shirt",
    price: 29000,
    category: "top",
    image: basicTshirt,
    // image: "/images/p1.jpg"
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 89000,
    category: "outer",
    image: denimjacket,
    // image: "/images/p2.jpg"
  },
  {
    id: 3,
    name: "Sneakers",
    price: 79000,
    category: "shoes",
    image: sneakers,
    // image: "/images/p3.jpg"
  }
];

export default products;