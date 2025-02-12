import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import tw from "@/lib/tailwind";
interface PaymentOptionProps {
  name: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
}

const PaymentOption: React.FC<PaymentOptionProps> = ({ name, icon }) => {
  return (
    <TouchableOpacity style={tw`items-center p-2`}>
      <MaterialCommunityIcons name={icon} size={32} color="green" />
      <Text style={tw`text-gray-700 text-sm font-semibold`}>{name}</Text>
    </TouchableOpacity>
  );
};

export default PaymentOption;
