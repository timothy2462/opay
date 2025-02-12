import { View, Text, ScrollView } from "react-native";
import React from "react";
import BalanceCard from "@/src/components/BalanceCard";
import PaymentGrid from "@/src/components/PaymentGrid";
import tw from "@/lib/tailwind";
export default function Dashboard() {
  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`p-4`}>
        <Text style={tw`text-gray-700 font-bold text-lg`}>Hello, Timothy</Text>
      </View>
      <BalanceCard />
      <PaymentGrid />
    </ScrollView>
  );
}
