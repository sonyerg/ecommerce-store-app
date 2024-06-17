import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export default async function getProduct(productId: string): Promise<Product> {
  const reponse = await fetch(`${URL}/${productId}`);

  return reponse.json();
}
