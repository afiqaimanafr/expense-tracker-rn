import { View, Text } from "react-native";

function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce();
  
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>RM99.99</Text>
    </View>
  );
}

export default ExpensesSummary;
