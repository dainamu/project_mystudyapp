"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
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
    <section>
      <form>
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
