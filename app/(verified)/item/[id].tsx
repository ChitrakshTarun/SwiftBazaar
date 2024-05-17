import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";

const ProductItemPage = () => {
  const { id, title, image } = useLocalSearchParams();
  const decodedTitle = decodeURIComponent(title.toString());
  return (
    <View>
      <Image style={{ height: 100 }} contentFit="scale-down" source={image} />
      <Text className="text-xl">
        {id} - {decodedTitle}
      </Text>
    </View>
  );
};

export default ProductItemPage;
