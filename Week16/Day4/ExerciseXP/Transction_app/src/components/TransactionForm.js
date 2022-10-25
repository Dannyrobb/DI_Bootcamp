import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { insert_trx, update_trx } from "../redux/actions";

const TransactionForm = (props) => {
  const [transaction, setTransaction] = useState({
    accountNumber: "",
    FSC: "",
    name: "",
    amount: "",
  });

  useEffect(() => {
    if (props.currentIndex !== -1) {
      const trx = props.list[props.currentIndex];
      setTransaction({
        accountNumber: trx.accountNumber || "",
        FSC: trx.FSC || "",
        name: trx.name || "",
        amount: trx.amount || "",
      });
    }
  }, [props.currentIndex]);

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.currentIndex === -1) {
      props.handleInsert(transaction);
    } else {
      props.handleUpdate(transaction);
    }

    setTransaction({
      accountNumber: "",
      FSC: "",
      name: "",
      amount: "",
    });
  };
  return (
    <>
      <h1>Transaction Form:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="accountNumber" onChange={handleChange} placeholder="Account Number.." value={transaction.accountNumber} />
        <br />
        <input type="text" name="FSC" onChange={handleChange} placeholder="FSC..." value={transaction.FSC} />
        <br />
        <input type="text" name="name" onChange={handleChange} placeholder="Name.." value={transaction.name} />
        <br />
        <input type="text" name="amount" onChange={handleChange} placeholder="Amount.." value={transaction.amount} />
        <br />
        <button>{props.currentIndex === -1 ? "Submit" : "Update"}</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentIndex: state.currentIndex,
    list: state.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInsert: (trx) => dispatch(insert_trx(trx)),
    handleUpdate: (trx) => dispatch(update_trx(trx)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
