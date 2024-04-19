import { Pressable, Text, View } from "react-native";
import React from "react";
import { Router, useRouter } from "expo-router";
import { useFonts } from "expo-font";

const LandingPage = () => {
	const router = useRouter();
	// const [loaded] = useFonts({});
	// if (!loaded) {
	// 	return null;
	// }
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-7xl">Swift Bazaar</Text>
			<Pressable onPress={() => router.push("/(tabs)")}>
				<Text>Go to Tabs</Text>
			</Pressable>
		</View>
	);
};

export default LandingPage;
