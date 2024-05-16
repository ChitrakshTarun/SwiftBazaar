import { Text, View, StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/constants/interfaces/products";

export default function ProductsPage() {
  const products = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("http://localhost:8081/api/products").then((res) => res.json()),
  });

  return (
    <View style={styles.container}>
      <View>
        {products.data?.map((product: Product) => (
          <Text key={product.id}>{product.title}</Text>
        ))}
      </View>
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
