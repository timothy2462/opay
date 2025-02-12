import { Tabs } from "expo-router/tabs";
import { Ionicons } from "@expo/vector-icons";

export default function DashboardLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#10B981",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarStyle: { backgroundColor: "white", paddingBottom: 5, height: 60 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size = 24 }) => (
            <Ionicons name="gift-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="rewards/index"
        options={{
          title: "Rewards",
          tabBarIcon: ({ color, size = 24 }) => (
            <Ionicons name="gift-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="finance/index"
        options={{
          title: "Finance",
          tabBarIcon: ({ color, size = 24 }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cards/index"
        options={{
          title: "Cards",
          tabBarIcon: ({ color, size = 24 }) => (
            <Ionicons name="card-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
