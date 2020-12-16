import { createDrawerNavigator } from '@react-navigation/drawer';

export type RootStackParamList = {
    Home: undefined;
    About: undefined;
};

export const RootDrawer = createDrawerNavigator<RootStackParamList>();
