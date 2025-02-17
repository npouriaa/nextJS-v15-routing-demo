import { notFound, redirect } from "next/navigation";

type ReviewDetailsType = {
  params: Promise<{ productId: string; reviewId: string }>;
};

const ReviewsDetails = async ({ params }: ReviewDetailsType) => {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/products")
  }

  return (
    <h1>
      Review {reviewId} for {productId}
    </h1>
  );
};

export default ReviewsDetails;
