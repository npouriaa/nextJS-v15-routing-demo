import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1>Welcome home!</h1>
      <Link className="text-blue-400" href="/blog">Blog page</Link>
      <Link className="text-blue-400" href="/products">Products page</Link>
    </div>
  );
};

export default Home;
