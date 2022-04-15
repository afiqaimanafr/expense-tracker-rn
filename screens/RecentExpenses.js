import { useContext } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
}

export default RecentExpenses;
