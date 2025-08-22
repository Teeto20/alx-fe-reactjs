import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response not ok");
  return res.json();
};

function PostsComponent() {
  const { data: posts, error, isLoading, isError, refetch } = useQuery(
    ["posts"],
    fetchPosts,
    {
      staleTime: 5000,
      cacheTime: 1000 * 60 * 5, // ✅ works in v4
      refetchOnWindowFocus: true, // ✅ works in v4
      keepPreviousData: true, // ✅ works in v4
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
