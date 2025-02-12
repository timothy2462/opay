import { View, Text } from "react-native";
import React from "react";
import PaymentOption from "./PaymentOption";
import tw from "@/lib/tailwind";
const options = [
  { name: "Airtime", icon: "cellphone" },
  { name: "Data", icon: "wifi" },
  { name: "Betting", icon: "soccer" },
  { name: "TV", icon: "television" },
  { name: "Electricity", icon: "flash" },
  { name: "Internet", icon: "router-wireless" },
  { name: "School & Exams", icon: "school" },
  { name: "Data", icon: "wifi" },
  { name: "More", icon: "dots-horizontal" },
];

const PaymentGrid = () => {
  return (
    <View style={tw`mt-4 mx-4`}>
      <Text style={tw`text-gray-800 font-bold text-lg`}>Payment</Text>
      <View style={tw`flex-row flex-wrap justify-between mt-2 bg-[#F8F8FA]`}>
        {options.map((item, index) => (
          <PaymentOption key={index} name={item.name} icon={item.icon as any} />
        ))}
      </View>
    </View>
  );
};

export default PaymentGrid;
