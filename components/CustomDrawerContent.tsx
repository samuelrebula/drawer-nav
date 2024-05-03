import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Image, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{ backgroundColor: "#dde3fe" }}
      >
        <View style={{ padding: 20 }}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
            }}
            style={{ width: 100, height: 100, alignSelf: "center" }}
          />
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "500",
              fontSize: 18,
              paddingTop: 10,
              color: "#5363df",
            }}
          >
            GitHub
          </Text>
        </View>

        <View style={{ backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
          <DrawerItem label={"Logout"} onPress={() => router.replace("/")} />
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          borderTopColor: "#dde3fe",
          borderTopWidth: 1,
          padding: 20,
          paddingBottom: 20 + bottom,
        }}
      >
        <Text>Footer</Text>
      </View>
    </View>
  );
}
