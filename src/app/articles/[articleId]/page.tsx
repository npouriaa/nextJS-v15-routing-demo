"use client";

import Link from "next/link";

// for accessing params and useParams and using async / await in client components 
import { use } from "react";

type NewsArticleProps = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fa" | "fr" }>; /* can't use it in layout files */
};

const NewsArticle = ({ params, searchParams }: NewsArticleProps) => {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div className="flex flex-col gap-8 py-4">
      <h1>News Article Id : {articleId}</h1>
      <p>Reading in {lang} </p>
      <div className="flex gap-4">
        <Link href={`/articles/${articleId}/?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}/?lang=fa`}>Persian</Link>
        <Link href={`/articles/${articleId}/?lang=fr`}>French</Link>
      </div>
    </div>
  );
};

export default NewsArticle;
