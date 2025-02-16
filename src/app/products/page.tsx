import Link from "next/link";

type ProductType = {
  id: number;
  name: string;
};

export const metadata = {
  title: "Products",
};

const ProductsPage = () => {
  const productsArray: ProductType[] = [
    {
      id: 1,
      name: "Product 1",
    },
    {
      id: 2,
      name: "Product 2",
    },
    {
      id: 3,
      name: "Product 3",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <h1>Products List :</h1>
      <Link className="text-blue-400" href="/">
        Home page
      </Link>
      <ul className="list-decimal px-6 flex flex-col gap-10 items-start">
        {productsArray.map((item) => (
          <li key={item.id}>
            <Link href={`/products/${item.id}`}>{item.name}</Link>
          </li>
        ))}
        <li>
          <Link href="/products/4" replace>Product 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductsPage;
