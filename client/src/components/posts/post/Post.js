import React from "react";
import useStyles from "./styles";

const Post = ({ post }) => {
  const classes = useStyles();
  console.log(post);
  return (
    <div>
      <H1>aaa</H1>
      <h2>{post.title}</h2>
      <p>Message: {post.message}</p>
      <p>Created at: {post.createdAt}</p>
    </div>
  );
};

export default Post;
