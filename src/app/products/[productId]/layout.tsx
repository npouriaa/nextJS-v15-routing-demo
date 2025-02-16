import { ReactNode } from "react";

type ProductDetailsLayoutType = {
  children: ReactNode;
};

const ProductDetailsLayout = ({ children }: ProductDetailsLayoutType) => {
  return (
    <>
      {children}
      <h2>Featured Products</h2>
    </>
  );
};

export default ProductDetailsLayout;
