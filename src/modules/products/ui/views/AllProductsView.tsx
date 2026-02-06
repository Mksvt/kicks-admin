import { CirclePlus } from 'lucide-react';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { ProductItem } from '../components/ProductItem';
import { ProductList } from '../components/ProductList';

const productsData = [
  {
    id: 1,
    image: "",
    title: "гавнодави класичні",
    category: "фімозні обрізки",
    price: 666.00,
    summary: "ПАДАВ БЕЗВАЛІСНООО ГРАААААД",
    sales: 1269,
    remaining: 1269,
    totalStock: 2500,
  },
  {
    id: 2,
    image: "",
    title: "гавнодави класичні",
    category: "фімозні обрізки",
    price: 666.00,
    summary: "ПАДАВ БЕЗВАЛІСНООО ГРАААААД",
    sales: 1269,
    remaining: 1269,
    totalStock: 2500,
  },
  {
    id: 3,
    image: "",
    title: "гавнодави класичні",
    category: "фімозні обрізки",
    price: 666.00,
    summary: "ПАДАВ БЕЗВАЛІСНООО ГРАААААД",
    sales: 1269,
    remaining: 1269,
    totalStock: 2500,
  },
  {
    id: 4,
    image: "",
    title: "гавнодави класичні",
    category: "фімозні обрізки",
    price: 666.00,
    summary: "ПАДАВ БЕЗВАЛІСНООО ГРАААААД",
    sales: 1269,
    remaining: 1269,
    totalStock: 2500,
  },
  {
    id: 5,
    image: "",
    title: "гавнодави класичні",
    category: "фімозні обрізки",
    price: 666.00,
    summary: "ПАДАВ БЕЗВАЛІСНООО ГРАААААД",
    sales: 1269,
    remaining: 1269,
    totalStock: 2500,
  },
  {
    id: 6,
    image: "",
    title: "гавнодави класичні",
    category: "фімозні обрізки",
    price: 666.00,
    summary: "ПАДАВ БЕЗВАЛІСНООО ГРАААААД",
    sales: 1269,
    remaining: 1269,
    totalStock: 2500,
  },
];

export function AllProductsView() {
  return (
    <div className="bg-dashboard h-[calc(100vh-6rem)]">
      <div className="flex flex-row items-center justify-between pr-6">
        <PageBreadcrumb
          routes={[
            { page: 'Home', link: '/dashboard' },
            { page: 'All Products', link: '/products/all' },
          ]}
        />
        <button className="group flex items-center justify-center gap-3 w-53 h-12 bg-black text-white text-xs font-bold tracking-widest uppercase rounded-md hover:bg-neutral-800 transition-colors">
          <CirclePlus className="size-5 text-white transition-transform group-hover:scale-110" />
          Add New Product
        </button>
      </div>
      <ProductList products={productsData}/>
    </div>
  );
}
