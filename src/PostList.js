import React from "react";
import {usePosts} from "./PostProvider";
import Post from "./Post";
import { useStyles } from "./material-styles";
import List from "@material-ui/core/List";

export default function PostList() {
  const classes = useStyles();
  const { posts } = usePosts();
  return (
      <List className={classes.list}>
          {[...posts].reverse().map((post) => (
              <Post key={post._id} {...post} />
          ))}
      </List>
  );
}