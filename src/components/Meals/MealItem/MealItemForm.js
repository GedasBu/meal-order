import classes from "./MealItemForm.module.css";

import Input from "../../UI/Input";
import React, { useRef, useState } from "react";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsvalid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +amountInputRef.current.value.trim();
    if (enteredAmount === 0 || enteredAmount < 0 || enteredAmount > 3) {
      setAmountIsvalid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "3",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please eneter valid amount</p>}
    </form>
  );
};

export default MealItemForm;
