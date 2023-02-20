import { createStackNavigator } from "@react-navigation/stack";
import { SelectBank } from "../screens/SelectBank";
import { TabRoutes } from "./tabs.routes";

const { Screen, Navigator } = createStackNavigator();

export function StackNavigation() {
  return (
    <Navigator
      initialRouteName="SelectBank"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="TabRoutes" component={TabRoutes} />
      <Screen name="SelectBank" component={SelectBank} />
    </Navigator>
  );
}
