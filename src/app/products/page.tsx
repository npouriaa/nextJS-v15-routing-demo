import Link from "next/link";

type ProductType = {
  id: number;
  name: string;
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
      <ul className="list-decimal px-6 flex flex-col gap-10 items-start">
        {productsArray.map((item) => (
          <li key={item.id}>
            <Link href={`/products/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
