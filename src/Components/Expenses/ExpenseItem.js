import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    //here props.date has been used line 33 kind like
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <dive className="expense-item__price">${props.amount}</dive>
        </div>
      </Card>
    </li>
  ); //wraped up under one single div
};
export default ExpenseItem;
