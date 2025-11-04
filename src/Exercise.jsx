import React, { useEffect, useState } from "react";
import PostList from "./PostList";

function Exercise() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("[Component] Error fetching posts:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-special-red2 text-red-600">Post Cards</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default Exercise;
