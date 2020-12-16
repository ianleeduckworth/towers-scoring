import { createDrawerNavigator } from '@react-navigation/drawer';

export type RootStackParamList = {
    Home: undefined;
    Rules: undefined;
};

export const RootDrawer = createDrawerNavigator<RootStackParamList>();
