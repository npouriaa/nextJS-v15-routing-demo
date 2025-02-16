import Link from "next/link";

type ReviewsListType = {
  params: Promise<{ productId: string }>;
};

type ReviewType = {
  id: number;
  link: string;
  text: string;
};

const ReviewsList = async ({ params }: ReviewsListType) => {
  const productId = (await params).productId;

  const reviewsArray: ReviewType[] = [
    {
      id: 1,
      link: `/products/${productId}/reviews/1`,
      text: "review 1",
    },
    {
      id: 2,
      link: `/products/${productId}/reviews/2`,
      text: "review 2",
    },
    {
      id: 3,
      link: `/products/${productId}/reviews/3`,
      text: "review 3",
    },
  ];

  return (
    <>
      <h1>Reviews</h1>
      <ul>
        {reviewsArray.map((item) => (
          <li key={item.id}>
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReviewsList;
