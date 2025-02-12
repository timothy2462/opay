import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import Dashboard from "../screens/Dashboard/Dashboard";
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={Dashboard}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Rewards"
          component={Dashboard}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="gift" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Finance"
          component={Dashboard}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bank" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cards"
          component={Dashboard}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="credit-card" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;
