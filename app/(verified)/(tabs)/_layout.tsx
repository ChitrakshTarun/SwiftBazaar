import React from "react";
import { Tabs } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/global.css";
const queryClient = new QueryClient();

export default function TabLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="categories"
          options={{
            title: "Categories",
          }}
        />
        <Tabs.Screen
          name="products"
          options={{
            title: "Products",
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
          }}
        />
      </Tabs>
    </QueryClientProvider>
  );
}
