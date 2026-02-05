import { ProductItem } from "./ProductItem"

interface Product {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
  summary: string;
  sales: number;
  remaining: number;
  totalStock: number;
}

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <section className="w-full bg-[#E7E7E3] min-h-[calc(100vh-6rem)] p-4 flex justify-center">
      <div className="w-full max-w-[1800px]">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4 justify-items-center">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
              summary={product.summary}
              sales={product.sales}
              remaining={product.remaining}
              totalStock={product.totalStock}
            />
          ))}
        </div>
      </div>
    </section>
  )
}