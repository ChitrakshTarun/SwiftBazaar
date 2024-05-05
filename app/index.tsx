import { Pressable, Text, View, Dimensions } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { Router, useRouter } from "expo-router";
import { useFonts } from "expo-font";

const LandingPage = () => {
  const router = useRouter();
  const windowWidth = Dimensions.get("window").width;
  // const [loaded] = useFonts({});
  // if (!loaded) {
  // 	return null;
  // }
  return (
    <View className="flex-1 items-center justify-center gap-14 bg-white">
      <Text className="text-7xl">SwiftBazaar</Text>
      <Text className="text-3xl">Ghar pe order kar</Text>
      <Image style={{ height: windowWidth * 0.95, width: windowWidth * 0.95 }} source={require("../assets/images/LoginImage.jpg")} contentFit="contain" />
      <Pressable className=" bg-[#F7BE38] rounded-lg px-5 py-2.5 w-5/6 items-center" onPress={() => router.push("/(tabs)")}>
        <Text className="text-xl">Login</Text>
      </Pressable>
      <Pressable className=" bg-[#F7BE38] rounded-lg px-5 py-2.5 w-5/6 items-center" onPress={() => router.push("/(tabs)")}>
        <Text className="text-xl">Sign-Up</Text>
      </Pressable>
    </View>
  );
};

export default LandingPage;
