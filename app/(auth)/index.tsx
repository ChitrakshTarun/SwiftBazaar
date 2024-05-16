import React from "react";
import { Pressable, Text, View, Dimensions } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const LandingPage = () => {
  const router = useRouter();
  const windowWidth = Dimensions.get("window").width;
  return (
    <View className="flex-1 items-center justify-center gap-14 bg-white">
      <Image style={{ height: windowWidth * 0.95, width: windowWidth * 0.95 }} source={require("@/assets/images/HeroImage.svg")} contentFit="contain" />
      <Text className="text-7xl">SwiftBazaar</Text>

      <View className="items-center w-full gap-6 px-4">
        <Pressable className=" bg-red-500 rounded-2xl py-5 w-full items-center" onPress={() => router.push("/(auth)/login")}>
          <Text className="text-2xl font-bold color-white">Login</Text>
        </Pressable>
        <Pressable className=" bg-red-500 rounded-2xl py-5 w-full items-center" onPress={() => router.push("/(auth)/signup")}>
          <Text className="text-2xl font-bold color-white">Sign-Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LandingPage;
