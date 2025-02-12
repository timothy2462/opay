import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../../../lib/tailwind";
import { useRouter } from "expo-router";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <View>
        <Image
          source={require("../../../assets/images/opay-logo-2.png")}
          style={tw`w-50 h-50 mb-5`}
        />
      </View>
      <Text style={tw`text-xl font-bold text-[#321E71]`}>
        We Are Beyond Banking
      </Text>
      <View style={tw`flex-row items-center justify-center mt-4`}>
        <Image
          source={require("../../../assets/images/arm.png")}
          style={tw`w-6 h-6 mr-2`}
        />
        <Text style={tw`text-[#321E71] text-sm font-bold`}>
          LICENCED BY CBN INSURED BY{" "}
        </Text>
        <Text style={tw`text-[#321E71] font-bold text-xl`}>NDIC</Text>
      </View>

      <View style={tw`flex-row mt-20`}>
        <TouchableOpacity onPress={() => {router.push('/sign-up')}}>
          <Text style={tw`text-sm font-semibold text-[#1E2E4B] mr-5`}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {router.push('/sign-up')}}>
          <Text style={tw`text-sm font-semibold text-[#1E2E4B]`}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
