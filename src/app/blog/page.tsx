export const metadata = {
  title: "Blog",
};

const Blog = async () => {
  // real API call delay
  // await fetch("https://jsonplaceholder.typicode.com/posts/1")
  //   .then((res) => res.json())
  //   .then((result) => console.log(result));

  // Intentional delay
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional delay");
    }, 2000);
  });

  return <h1>Blog page</h1>;
};

export default Blog;
