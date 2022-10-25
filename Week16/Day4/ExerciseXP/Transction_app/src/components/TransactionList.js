import TransactionForm from "./TransactionForm";
import { connect } from "react-redux";
import { update_index, delete_trx } from "../redux/actions";
const TransactionList = (props) => {
  return (
    <>
      <TransactionForm />
      <h1>Transaction List:</h1>
      <div style={{ margin: "0 auto", width: "500px" }}>
        <table style={{ border: "1px solid #ccc" }}>
          <tbody>
            {props.list.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}> Account Number:</td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}> {item.accountNumber}</td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}> FSC:</td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}> {item.FSC}</td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}> Name:</td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}> {item.name}</td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}> Amount:</td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}> {item.amount}</td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}>
                    <button onClick={() => props.handleIndex(index)}>Edit</button>
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}>
                    <button onClick={() => props.handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIndex: (index) => dispatch(update_index(index)),
    handleDelete: (index) => dispatch(delete_trx(index)),
  };
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
