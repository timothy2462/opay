// import { View, Text, Image } from "react-native";
// import React from "react";
// import { router} from "expo-router";
// import tw from "@/lib/tailwind";
// import InputField from "@/src/components/InputField";
// import Button from "@/src/components/Button.";

// const SignUpScreen: React.FC = () => {

//   return (
//     <View style={tw`flex-1 items-center justify-center px-6 bg-white`}>
//       <Image
//           source={require("../../../assets/images/opay.jpg")}
//           style={tw`w-16 h-16 mb-4`}
//       />

//       <Text style={tw`text-lg font-semibold text-gray-700 mb-6`}>
//         Welcome to OPay
//       </Text>

//       <InputField label="Phone number" placeholder="Enter your phone number" keyboardType="phone-pad" />

//       <InputField label="Password" placeholder="6 digits" keyboardType="numeric" secureTextEntry />

//       <Button title="Confirm" variant="secondary" onPress={() => { router.push('/dashboard')}} />
//       <View style={tw`h-3`} />
//       <Button title="Register" variant="primary" onPress={() => {}} />
//     </View>
    
//   );
// };

// export default SignUpScreen;


import { View, Text, Image, Alert } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import tw from "@/lib/tailwind";
import InputField from "@/src/components/InputField";
import Button from "@/src/components/Button.";
const SignUpScreen: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleConfirm = () => {
    if (!phone.trim() || !password.trim()) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    router.push("/dashboard");
  };

  return (
    <View style={tw`flex-1 items-center justify-center px-6 bg-white`}>
      <Image
        source={require("../../../assets/images/opay.jpg")}
        style={tw`w-16 h-16 mb-4`}
      />

      <Text style={tw`text-lg font-semibold text-gray-700 mb-6`}>
        Welcome to OPay
      </Text>

      <InputField
        label="Phone number"
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <InputField
        label="Password"
        placeholder="6 digits"
        keyboardType="numeric"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title="Confirm"
        variant="secondary"
        onPress={handleConfirm}
        disabled={!phone.trim() || !password.trim()}
      />

      <View style={tw`h-3`} />

      <Button
        title="Register"
        variant="primary"
        onPress={handleConfirm}
        disabled={!phone.trim() || !password.trim()}
      />
    </View>
  );
};

export default SignUpScreen;
