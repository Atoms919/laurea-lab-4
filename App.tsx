import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactScreen from "./app/screens/ContactScreen";
import LogInScreen from "./app/screens/LogInScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import type { StackParamList } from "./app/types";

const RootStack = createNativeStackNavigator<StackParamList>({
  initialRouteName: "WelcomeScreen",
  screens: {
    WelcomeScreen: { screen: WelcomeScreen, options: { title: "Welcome" } },
    LogInScreen: { screen: LogInScreen, options: { title: "Login Page" } },
    ProfileScreen: { screen: ProfileScreen, options: { title: "Profile" } },
    ContactScreen: { screen: ContactScreen, options: { title: "Contact" } },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
