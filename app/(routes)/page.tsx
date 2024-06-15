import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";

import { Billboard } from "@/components/billboard";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";

export const revalidate = 0;

export default async function HomePage() {
  const billboards = await getBillboard("3dad7651-409c-4139-86fc-3e9629c5a371");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" products={products} />
        </div>
      </div>
    </Container>
  );
}
