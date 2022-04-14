import { View, Text, StyleSheet, FlatList } from "react-native";

function ExpensesOutput({ expenses }) {
  return (
    <View>
      <View>
        <Text>Last 7 Days</Text>
        <Text>RM99.99</Text>
      </View>
      <FlatList />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({});
