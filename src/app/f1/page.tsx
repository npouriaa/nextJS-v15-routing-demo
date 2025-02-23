import Link from "next/link";

const F1 = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1>F1 page</h1>
      <Link href="/f1/f2" className="text-blue-500">
        F2 page
      </Link>
      <Link href="/f3" className="text-blue-500">
        F3 page
      </Link>
    </div>
  );
};

export default F1;
