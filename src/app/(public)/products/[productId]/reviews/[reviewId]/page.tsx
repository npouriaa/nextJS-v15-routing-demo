type ReviewDetailsType = {
  params: Promise<{ productId: string; reviewId: string }>;
};

const ReviewsDetails = async ({ params }: ReviewDetailsType) => {
  const { productId, reviewId } = await params;

  return (
    <h1>
      Review {reviewId} for {productId}
    </h1>
  );
};

export default ReviewsDetails;
