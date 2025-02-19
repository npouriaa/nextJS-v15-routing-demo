import { Metadata } from "next";

type ProductDetailsPropsType = {
  params: Promise<{ productId: string }>;
};

// Dynamic generate meta data function (cant use it in client components directly)
export const generateMetadata = async ({
  params,
}: ProductDetailsPropsType): Promise<Metadata> => {
  const { productId } = await params;
  return {
    title : `Product ${productId}`
  }
};

const ProductDetails = async ({ params }: ProductDetailsPropsType) => {
  const productId = (await params).productId;
  return <h1>Details aobut product {productId}</h1>;
};

export default ProductDetails;
