import { Text, View, StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";

export default function CategoriesPage() {
  const categories = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetch("http://localhost:8081/api/categories").then((res) => res.json()),
  });
  return (
    <View style={styles.container}>
      {categories.data?.map((category: string, index: number) => (
        <Text key={index}>{category}</Text>
      ))}
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
