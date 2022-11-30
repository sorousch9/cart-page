import Input from "../../UI/Input";
import classes from "./ProductItemForm.module.css";

const ProductItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10", //incentory
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add to Cart</button>
    </form>
  );
};

export default ProductItemForm;
