import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

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
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
