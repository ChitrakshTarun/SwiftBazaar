import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";

const ProductItemPage = () => {
  useEffect(() => {
    console.log(image);
  }, []);
  const { id, image } = useLocalSearchParams();

  return (
    <View>
      <Image style={{ height: 100 }} contentFit="scale-down" source={image} />
      <Text className="text-xl">{id}</Text>
    </View>
  );
};

export default ProductItemPage;
