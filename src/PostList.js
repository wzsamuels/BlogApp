import React from "react";
import {usePosts} from "./PostProvider";
import Post from "./Post";

export default function PostList() {
  const { posts } = usePosts();
  return (
      <>
          {[...posts].reverse().map((post) => (
              <Post key={post._id} {...post} />
          ))}
      </>
  );
}