import Cart from "../UI/Cart";
import classes from "./AvailableProducts.module.css";
import ProductItem from "./ProductItem/ProductItem";
import img1 from "../../assets/1.webp";
import img2 from "../../assets/2.webp";
import img3 from "../../assets/3.webp";
import img4 from "../../assets/4.webp";
const Artificial_Products = [
  {
    id: "1",
    img: img1,
    name: "MAX AURA 3 - High-top trainers",
    description: "Upper material: Leather and textile!",
    price: 105.99,
  },
  {
    id: "2",
    img: img4,
    name: "JUMPMAN CREW - Print T-shirt",
    description: "Outer fabric material: 57% cotton, 43% polyester",
    price: 36.5,
  },
  {
    id: "3",
    img: img2,
    name: "HOODIE - Hoodie",
    description: "Outer fabric material: 80% cotton, 20% polyester",
    price: 32.99,
  },
  {
    id: "4",
    img: img3,
    name: "JUMPMAN CLASSIC - Cap",
    description: "Lining: 65% polyester, 35% cotton",
    price: 18.99,
  },
];
const AvailableProducts = () => {
  const productsList = Artificial_Products.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      img={product.img}
      price={product.price}
      description={product.description}
    />
  ));
  return (
    <section className={classes.products}>
      <Cart>
        <ul>{productsList}</ul>
      </Cart>
    </section>
  );
};

export default AvailableProducts;
