import type { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}

export type StackParamList = {
  LogInScreen: undefined;
  WelcomeScreen: undefined;
  ProfileScreen: undefined;
  ContactScreen: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<
  StackParamList,
  "LogInScreen"
>;

export type WelcomeScreenProps = NativeStackScreenProps<
  StackParamList,
  "WelcomeScreen"
>;

export type ProfileScreenProps = NativeStackScreenProps<
  StackParamList,
  "ProfileScreen"
>;

export type ContactScreenProps = NativeStackScreenProps<
  StackParamList,
  "ContactScreen"
>;
