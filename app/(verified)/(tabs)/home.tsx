import { Text, View, StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function HomePage() {
  const test = useQuery({
    queryKey: ["test"],
    queryFn: () => fetch("/api/test").then((res) => res.json()),
  });

  return (
    <View style={styles.container}>
      <Text>{test.data?.message}</Text>
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
