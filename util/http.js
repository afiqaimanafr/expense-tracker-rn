import axios from "axios";

function storeExpense(expenseData) {
  axios.post(
    "https://react-native-expense-planner-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}

export default storeExpense;
