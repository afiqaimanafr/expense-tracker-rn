import { View, Text } from "react-native";

function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  });

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>RM99.99</Text>
    </View>
  );
}

export default ExpensesSummary;
