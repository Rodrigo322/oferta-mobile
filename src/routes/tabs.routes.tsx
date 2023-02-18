import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BellRinging,
  House,
  ShoppingCart,
  UserGear,
} from "phosphor-react-native";
import { BuyFinalized } from "../screens/ BuyFinalized";
import { AddressProfile } from "../screens/AddressProfile";
import { Cart } from "../screens/Cart";
import { DeactivateAccount } from "../screens/DeactivateAccount";
import { DetailsProduct } from "../screens/DetailsProduct";
import { Home } from "../screens/Home";
import { Notifications } from "../screens/Notifications";
import { Profile } from "../screens/Profile";
import { ResetPassword } from "../screens/ResetPassword";
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
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <BellRinging color={color} size={30} weight="fill" />
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
      <Screen
        name="Profile"
        component={Profile}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="DeactivateAccount"
        component={DeactivateAccount}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="AddressProfile"
        component={AddressProfile}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="DetailsProduct"
        component={DetailsProduct}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="BuyFinalized"
        component={BuyFinalized}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
