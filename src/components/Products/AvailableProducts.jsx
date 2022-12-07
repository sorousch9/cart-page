import { useState } from "react";
import { useEffect } from "react";
import Cart from "../UI/Cart";
import classes from "./AvailableProducts.module.css";
import ProductItem from "./ProductItem/ProductItem";

const AvailableProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://jordan-f1757-default-rtdb.europe-west1.firebasedatabase.app/products.json"
      );
      if (!response.ok) {
        throw new Error("somthing went wrong");
      }
      const responseData = await response.json();
      const loadedProducts = [];

      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          description: responseData[key].description,
          name: responseData[key].name,
          price: responseData[key].price,
        });
      }

      setProducts(loadedProducts);
      setIsLoading(false);
    };

    fetchProducts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (httpError) {
    return (
      <section className={classes.productsErr}>
        <p>{httpError}</p>
      </section>
    );
  }
  if (isLoading) {
    return (
      <section className={classes.productsLoading}>
        <p>Loading ...</p>
      </section>
    );
  }

  const productsList = products.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
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
