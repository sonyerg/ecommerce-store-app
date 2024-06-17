import getProducts from "@/actions/get-products";
import getProduct from "@/actions/get-product";

import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";
import { Gallery } from "@/components/gallery";
import { ProductInfo } from "@/components/product-info";

export const revalidate = 0;

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="py-10 sm:px-6 lg:px-8 px-4">
          <div className="grid sm:grid-cols-2 lg:items-start lg:gap-x-8 sm:gap-x-4">
            <Gallery images={product.images} />
            <div className="mt-10 sm:mt-16 sm:px-0 lg:mt-0">
              <ProductInfo product={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Suggested items" products={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
}
