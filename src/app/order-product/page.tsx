"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("placing your order");
    router.push("/");
    // router.replace("/")
    // router.forward()
    // router.back()
  };

  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>place order</button>
    </div>
  );
};

export default OrderProduct;
