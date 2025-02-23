import Link from "next/link";

const InnerF2 = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1>Inner F2 page</h1>
      <Link href="/f5" className="text-blue-500">
        F5 page
      </Link>
    </div>
  );
};

export default InnerF2;
