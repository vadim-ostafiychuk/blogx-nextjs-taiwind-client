import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArticleInfo from "../article-info";

const ArticleCard = () => {
  return (
    <div className="flex items-start justify-start gap-7">
      <Image
        src="/image.jpg"
        width={500}
        height={500}
        alt=""
        className="max-w-[500px] object-contain"
      />
      <div>
        <Link
          href="/article/id"
          className="text-2xl font-medium hover:underline"
        >
          How to be more productive
        </Link>
        <ArticleInfo />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          accusantium, pariatur officia quasi voluptates possimus sequi optio?
          At explicabo voluptatibus facilis dignissimos odio quam harum ab
          laboriosam, minima rerum quis. Amet dolor aut architecto dignissimos
          esse inventore sequi expedita voluptates iste facere sunt
          necessitatibus nemo, unde nobis placeat odio numquam? Inventore modi
          distinctio maxime at laborum libero unde quia quam. Eligendi ratione
          similique nulla ut enim, suscipit, illo adipisci iusto incidunt
          corrupti eius quia quasi numquam nostrum obcaecati temporibus fugiat
          labore praesentium aspernatur excepturi, sapiente modi maiores? Animi,
          nemo iste? Optio modi rem tempore illum doloribus vero culpa sequi
          ipsa. Optio sint explicabo dolorum modi, eveniet nisi id, praesentium
          similique molestias vero, suscipit saepe voluptatibus! Quidem porro
          placeat minima voluptas! Eligendi labore minus facere consectetur illo
          aspernatur eaque fugit eum mollitia vel. Voluptatem cumque ut delectus
          sapiente neque hic repellendus voluptatum eligendi, nostrum modi
          aliquid magni aspernatur sunt recusandae quis. Quia aliquam odit sit
          aperiam explicabo consectetur modi debitis a quam velit repudiandae
          ratione atque, quis ipsum iste voluptatem, officiis placeat quisquam
          non maxime autem dolore quod tempore similique. Consectetur? Sed quos
          eius molestiae libero in.
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
