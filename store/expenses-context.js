import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 259.99,
    date: new Date("2022-04-14"),
  },
  {
    id: "e2",
    description: "Food",
    amount: 7.99,
    date: new Date("2022-04-15"),
  },
  {
    id: "e3",
    description: "Drink",
    amount: 2.59,
    date: new Date("2022-04-15"),
  },
  {
    id: "e4",
    description: "Smartphone",
    amount: 3259.99,
    date: new Date("2022-04-19"),
  },
  {
    id: "e5",
    description: "Laptop",
    amount: 4759.99,
    date: new Date("2022-04-19"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 259.99,
    date: new Date("2022-03-14"),
  },
  {
    id: "e7",
    description: "Food",
    amount: 7.99,
    date: new Date("2022-03-15"),
  },
  {
    id: "e8",
    description: "Drink",
    amount: 2.59,
    date: new Date("2022-03-15"),
  },
  {
    id: "e9",
    description: "Smartphone",
    amount: 3259.99,
    date: new Date("2022-03-19"),
  },
  {
    id: "e10",
    description: "Laptop",
    amount: 4759.99,
    date: new Date("2022-03-19"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
