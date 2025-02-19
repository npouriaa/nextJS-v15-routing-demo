import { ReactNode } from "react";

type ProductDetailsLayoutType = {
  children: ReactNode;
};

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ProductDetailsLayout = ({ children }: ProductDetailsLayoutType) => {
  const randomNumber = getRandomInt(2);
  console.log(randomNumber)

  if (randomNumber === 1) {
    throw new Error("Error loading product");
  }

  return (
    <>
      {children}
      <h2>Featured Products</h2>
    </>
  );
};

export default ProductDetailsLayout;
