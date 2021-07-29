import React, {createContext, useState, useContext, useEffect} from "react";
import {fetchDelete, useFetch} from "./lib/usefetch";
const PostContext = createContext({});
export const usePosts = () => useContext(PostContext);

export default function PostProvider({ children }) {
  const [posts, setPosts] = useState();
    // Fetch the posts via the API
  const {
    loading,
    data,
    error
  } = useFetch('http://localhost:3000/blog/api/list');

  // Update the post data when it changes (finishes fetching)
  useEffect(() => {
    setPosts(data);
    console.log(data);
  },[data]);

  // Add a new post to data held in memory (database is updated with fetch)
  const addPost = (_id, title, text, author, created) =>
    setPosts([
      ...posts,
      {
        _id,
        title,
        text,
        author,
        created,
      }
    ]);

  // Remove post from the page and from the database
  const removePost = _id => {
    setPosts(posts.filter(post => post._id !== _id));
    fetchDelete('http://localhost:3000/blog/api/delete', _id)
      .then(() => console.log(`Post ${_id} deleted`));
  }

  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <PostContext.Provider value={{ posts, addPost, removePost }}>
      {children}
    </PostContext.Provider>
  );
}
