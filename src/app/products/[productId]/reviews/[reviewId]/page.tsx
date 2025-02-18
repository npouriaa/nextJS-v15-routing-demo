import { notFound, redirect } from "next/navigation";

type ReviewDetailsType = {
  params: Promise<{ productId: string; reviewId: string }>;
};

const ReviewsDetails = async ({ params }: ReviewDetailsType) => {

  if(1 < 2) {
    throw new Error("Error loading review")
  }

  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    // notFound(); /* navigate user to 404 page programmatically */
    redirect("/products"); /* navigate user to desired route programmatically */
  }


  return (
    <h1>
      Review {reviewId} for {productId}
    </h1>
  );
};

export default ReviewsDetails;
