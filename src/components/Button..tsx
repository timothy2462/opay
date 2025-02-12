import { TouchableOpacity, Text } from "react-native";
import React from "react";
import tw from "@/lib/tailwind";
interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ title, onPress, variant = "primary" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`w-full py-3 rounded-lg ${
        variant === "primary" ? "bg-[#00C897]" : "bg-gray-500"
      }`}
    >
      <Text style={tw`text-white text-center text-lg font-semibold`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
