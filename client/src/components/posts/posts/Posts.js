import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "../post/Post";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div>
      <h1> Posts</h1>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid>
          {posts.map((post) => {
            return <Post post={post} />;
          })}
        </Grid>
      )}
    </div>
  );
};

export default Posts;
