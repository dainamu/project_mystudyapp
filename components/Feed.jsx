"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16">
      {data.map((p) => (
        <PromptCard key={p._id} post={p} handleTagClick={handleTagClick}>
          {" "}
        </PromptCard>
      ))}
    </div>
  );
};
const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {};
  useEffect(() => {
    const fetchPosts = async () => {
      console.log("fetchのapi/contentｗじっこう");
      const response = await fetch("/api/content");
      console.log("fetchのapi/contentｗじっこうの後");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts(); // fetchpostを呼び出す
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[100px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h4
          className="dark:invert text-transparent bg-clip-text bg-gradient-to-r text-gray-900
           from-indigo-500 via-sky-500 to-emerald-500 relative z-[1]  font-semibold"
        >
          学習を記録する
        </h4>
      </div>
      <PromptCardList data={posts} handleTagClick={() => {}} />

      <div className="mb-32 grid lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
};

export default Feed;
