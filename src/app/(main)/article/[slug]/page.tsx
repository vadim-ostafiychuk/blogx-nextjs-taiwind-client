import ArticleInfo from "@/components/article-info";
import CommentsCard from "@/components/comments";

export default function Article() {
  return (
    <>
      <div className="relative mb-10 h-[300px] bg-[url('/image.jpg')] bg-cover bg-center bg-no-repeat text-center">
        <h1 className="absolute bottom-0 left-0 right-0 top-1/2 text-4xl text-white">
          How to be more productive
        </h1>
      </div>
      <div className="container mx-auto px-4">
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
          corrupti
        </p>
      </div>
      <CommentsCard />
    </>
  );
}
