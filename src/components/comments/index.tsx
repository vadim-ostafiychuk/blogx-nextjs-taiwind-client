import React from "react";

const CommentsCard = () => {
  return (
    <div className="container mx-auto px-4 py-5">
      <h4 className="text-xl">Comments</h4>
      <div className="my-5 flex flex-col gap-5">
        <div className="w-full max-w-full rounded border border-gray-200 p-5">
          <div className="flex gap-3">
            <h4>Jonh Doe</h4>
            <span>23 Jul. 2023</span>
          </div>
          <p>Good article</p>
        </div>
        <div className="w-full max-w-full rounded border border-gray-200 p-5">
          <div className="flex gap-3">
            <h4>Jonh Doe</h4>
            <span>23 Jul. 2023</span>
          </div>
          <p>Good article</p>
        </div>
        <div className="w-full max-w-full rounded border border-gray-200 p-5">
          <div className="flex gap-3">
            <h4>Jonh Doe</h4>
            <span>23 Jul. 2023</span>
          </div>
          <p>Good article</p>
        </div>
        <div className="w-full max-w-full rounded border border-gray-200 p-5">
          <div className="flex gap-3">
            <h4>Vadim Ostafiychuk</h4>
            <span>23 Jul. 2023</span>
          </div>
          <p>Good article</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3>Enter your comment:</h3>
        <form action="" className="flex w-full flex-col gap-2 md:w-1/2">
          <textarea
            name="content"
            id="content"
            className="rounded border p-2"
            placeholder="..."
          ></textarea>
          <button
            className="mt-3 max-w-[200px] rounded-md bg-red-500 px-10 py-1 text-white"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentsCard;
