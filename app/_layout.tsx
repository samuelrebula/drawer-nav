import "react-native-gesture-handler";

import { Drawer } from "expo-router/drawer";
// Need to import and wrap the Drawer in SDK 50
// import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import CustomDrawerContent from "@/components/CustomDrawerContent";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: "#5363df",
        drawerActiveTintColor: "#fff",
        drawerLabelStyle: { marginLeft: -20 },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          headerTitle: "My home",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="news"
        options={{
          drawerLabel: "News",
          headerTitle: "Newsfeed",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="newspaper-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Profile",
          headerTitle: "My profile",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
