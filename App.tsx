import { StatusBar } from "react-native";
import "react-native-gesture-handler";

import { AuthProvider } from "./src/contexts/AuthContext";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#3eb091" translucent />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}
