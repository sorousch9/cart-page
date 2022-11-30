import classes from "./AvailableProducts.module.css";
const Artificial_Products = [
  {
    id: "1",
    name: "MAX AURA 3 - High-top trainers",
    description: "Upper material: Leather and textile!",
    price: 105.99,
  },
  {
    id: "2",
    name: "JUMPMAN CREW - Print T-shirt",
    description: "Outer fabric material: 57% cotton, 43% polyester",
    price: 36.5,
  },
  {
    id: "3",
    name: "HOODIE - Hoodie",
    description: "Outer fabric material: 80% cotton, 20% polyester",
    price: 32.99,
  },
  {
    id: "4",
    name: "JUMPMAN CLASSIC - Cap",
    description: "Lining: 65% polyester, 35% cotton",
    price: 18.99,
  },
];
const AvailableProducts = () => {
  const productsList = Artificial_Products.map((product) => (
    <li>{product.name}</li>
  ));
  return (
    <section className={classes.products}>
      <ul>{productsList}</ul>
    </section>
  );
};

export default AvailableProducts;
