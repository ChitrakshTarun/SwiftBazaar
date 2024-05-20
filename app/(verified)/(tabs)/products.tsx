import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/constants/interfaces/ProductInterface";
import { useRouter } from "expo-router";

export default function ProductsPage() {
  const router = useRouter();
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("/api/products").then((res) => res.json()),
  });

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {products?.map((product: Product) => (
          <Pressable
            key={product.id}
            onPress={() => {
              router.push({
                pathname: "/(verified)/item/[id]",
                params: { id: product.id, image: product.image, title: encodeURIComponent(product.title.replace(/\(/g, "%28").replace(/\)/g, "%29")) },
              });
            }}
          >
            <Image style={{ height: 100 }} contentFit="contain" source={product.image} />
            <Text className="text-xl">{`${product.title}`}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
