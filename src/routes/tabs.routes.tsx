import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { House, ShoppingCart, UserGear } from "phosphor-react-native";
import { Cart } from "../screens/Cart";
import { Home } from "../screens/Home";
import { Settings } from "../screens/Settings";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#019972",
          height: 85,
        },
        tabBarStyle: {
          backgroundColor: "#019972",
          height: 60,
          alignItems: "center",
          justifyContent: "center",
        },
        headerTintColor: "#019972",
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ccc",
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House color={color} size={30} weight="fill" />
          ),
        }}
      />
      <Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <ShoppingCart color={color} size={30} weight="fill" />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <UserGear color={color} size={30} weight="fill" />
          ),
        }}
      />
    </Navigator>
  );
}
