import Link from "next/link";

const F2 = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1>F2 page</h1>
      <Link href="/f4" className="text-blue-500">
        F4 page
      </Link>
    </div>
  );
};

export default F2;
