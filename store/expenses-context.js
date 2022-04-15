import { createContext } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: () => {},
  updateExpense: () => {},
});
