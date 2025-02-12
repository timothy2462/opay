import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import tw from "@/lib/tailwind";
const BalanceCard = () => {
  return (
    <View style={tw`bg-green-500 p-4 rounded-lg mx-4 mt-4`}>
      <View style={tw`flex-row justify-between`}>
        <Text style={tw`text-white font-bold text-lg`}>Total Balance</Text>
        <TouchableOpacity>
          <Text style={tw`text-white`}>Transaction History {">"}</Text>
        </TouchableOpacity>
      </View>
      <Text style={tw`text-white text-2xl font-bold my-2`}>*******</Text>
      <View style={tw`flex-row justify-around mt-2`}>
        <TouchableOpacity style={tw`items-center`}>
          <MaterialCommunityIcons name="plus-box" size={32} color="white" />
          <Text style={tw`text-white`}>Add money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center`}>
          <MaterialCommunityIcons name="swap-horizontal" size={32} color="white" />
          <Text style={tw`text-white`}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center`}>
          <MaterialCommunityIcons name="cash-minus" size={32} color="white" />
          <Text style={tw`text-white`}>Withdraw</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BalanceCard;
