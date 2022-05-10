import { View, Text, TextInput } from "react-native";

function Input({ label, type, maxLength }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput keyboardType={type} maxLength={maxLength} />
    </View>
  );
}

export default Input;
