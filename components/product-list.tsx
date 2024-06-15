import { Product } from "@/types";
import { NoResults } from "@/components/ui/no-results";
import { ProductCard } from "@/components/product-card";

interface ProductListProps {
  title: string;
  products: Product[];
}

export function ProductList({ title, products }: ProductListProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold ">{title}</h3>
      {products.length === 0 ? (
        <NoResults />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
