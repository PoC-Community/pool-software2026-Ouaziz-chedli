interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
}

const products: ProductProps[] = [
  {
    id: 1,
    name: "Product A",
    description: "Description of Product A",
    price: 29.99,
    inStock: true,
  },
  {
    id: 2,
    name: "Product B",
    description: "Description of Product B",
    price: 49.99,
    inStock: false,
  },
  {
    id: 3,
    name: "Product C",
    description: "Description of Product C",
    price: 19.99,
    inStock: true,
  },
];

function ProductCard({ product }: { product: ProductProps }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}

export function ProductList() {
  return (
    <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
