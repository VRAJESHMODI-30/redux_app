import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.amount);

  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <>
      <div className="mt-4">
        <h5 className="mb-2">Deposite/Withdraw Money</h5>
        <button
          className="btn btn-outline-primary mx-2"
          onClick={() => {
            withdrawMoney(50);
          }}
        >
          -
        </button>
        Update balance ({amount})
        <button
          className="btn btn-outline-primary mx-2"
          onClick={() => {
            depositMoney(50);
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Shop;
