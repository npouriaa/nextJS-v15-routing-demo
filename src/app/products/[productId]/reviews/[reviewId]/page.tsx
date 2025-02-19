import { notFound, redirect } from "next/navigation";

type ReviewDetailsType = {
  params: Promise<{ productId: string; reviewId: string }>;
};

// const getRandomInt = (count : number) => {
//   return Math.floor(Math.random() * count)
// }

const ReviewsDetails = async ({ params }: ReviewDetailsType) => {
  
  // const randomNumber = getRandomInt(2)

  // if(randomNumber === 1) {
  //   throw new Error("Error loading review")
  // }

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
