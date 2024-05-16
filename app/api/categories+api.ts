import { ExpoResponse } from "expo-router/server";

export async function GET() {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const res = await response.json();
  return ExpoResponse.json(res);
}
