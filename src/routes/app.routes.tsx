import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { TabRoutes } from "./tabs.routes";

const { Screen, Navigator } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Screen name="TabRoutes" component={TabRoutes} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
