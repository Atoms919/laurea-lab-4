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
  UserFeedScreen: undefined;
  RegisterScreen: undefined;
};

export interface Post {
  id: number;
  username: string;
  profilePic: string;
  postImage: string;
  likes: number;
  comments: number;
  shares: number;
  daysAgo: number;
}

export type LoginScreenProps = NativeStackScreenProps<
  StackParamList,
  "LogInScreen"
>;

export type RegisterScreenProps = NativeStackScreenProps<
  StackParamList,
  "RegisterScreen"
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
