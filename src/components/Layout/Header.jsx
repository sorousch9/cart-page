import { Fragment } from "react";
import jordan from "../../assets/jordan.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> Jordan. </h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.mainImage}>
        <img src={jordan} alt="jordan brand" />
      </div>
    </Fragment>
  );
};
export default Header;
