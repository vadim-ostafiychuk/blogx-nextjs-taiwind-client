import React from "react";
import ArticleCard from "../article-card";

const Articles = () => {
  return (
    <div className="flex flex-col gap-12 py-10">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
};

export default Articles;
