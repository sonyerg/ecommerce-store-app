import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

async function getCategory(categoryId: string): Promise<Category> {
  const response = await fetch(`${URL}/${categoryId}`);
  return response.json();
}

export default getCategory;
