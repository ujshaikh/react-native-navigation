/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  "(tabs)": String;
  "(screen)": String;
  "details": String;
  "AddNewCustomer": String;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Main: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Support: undefined;
  Login: undefined;
  Details: undefined;
  PackageModal: undefined;
  CheckoutModal: undefined;
  QuestionModal: undefined;
  AskQuestionModal: undefined;
  PaymentsUICustom: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Home: undefined;
  Packages: undefined;
  Appointment: undefined;
  Account: undefined;
  Dashboard: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
