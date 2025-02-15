type ProductDetailsType = {
  params: Promise<{ productId: string }>;
};

const ProductDetails = async ({ params }: ProductDetailsType) => {
  const productId = (await params).productId;
  return <h1>Details aobut product {productId}</h1>;
};

export default ProductDetails;
