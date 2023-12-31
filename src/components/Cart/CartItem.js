import classes from "./CartItem.module.css";

const CartItem = (props) => {
  console.log("price", props.price);
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemoveItem}>−</button>
        <button onClick={props.onAddItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
