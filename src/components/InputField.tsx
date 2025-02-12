import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";
import tw from "@/lib/tailwind";
interface InputFieldProps extends TextInputProps {
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  return (
    <View style={tw`w-full mb-4`}>
      <Text style={tw`text-gray-700 mb-2 text-base`}>{label}</Text>
      <TextInput
        {...props}
        style={tw`w-full p-3 border border-gray-300 rounded-lg bg-gray-100`}
      />
    </View>
  );
};

export default InputField;
