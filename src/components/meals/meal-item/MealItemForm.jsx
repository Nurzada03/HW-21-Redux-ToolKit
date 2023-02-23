import React from "react";
import Button from "../../UI/Button";
import { useState } from "react";
import { addToBasket } from "../../../store/basket/basketSlice";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";

const MealItemForm = ({ id, title, price }) => {
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const basketItem = {
      id,
      price,
      title,
      amount,
    };

    dispatch(addToBasket(basketItem));
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <Container>
        <StyledLabel htmlFor={id}>Amount</StyledLabel>
      </Container>
      <Container>
        <StyledText
          id={id}
          type="number"
          value={amount}
          size="small"
          onChange={amountChangeHandler}
        />
      </Container>

      <Button>
        <AddIcon />
        Add
      </Button>
    </StyledForm>
  );
};

export default MealItemForm;

const StyledText = styled(TextField)(() => ({
  "&": {
    width: " 3.75rem",
    height: "2rem",
    outline: "none",
    borderRadius: "6px",
    fontWeight: "500",
    fontSize: "16px",
  },

  "& .MuiOutlinedInput-input": {
    padding: "5px 10px",
    fontSize: "14px",
  },
}));

const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
}));

const Container = styled("div")(() => ({
  marginBottom: "15px",
}));

const StyledLabel = styled("label")(() => ({
  fontWeight: "600",
  fontSize: "1.125rem",
  lineHeight: "1.6875rem",
  margin: "0 1.25rem 0 0",
}));
