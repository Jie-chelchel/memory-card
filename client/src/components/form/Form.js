import React, { useState } from "react";
import { createPosts } from "../../actions/posts";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

const initialPostData = {
  creator: "",
  title: "",
  message: "",
  tags: "",
  selectedFile: "",
};

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [postData, setPostData] = useState(initialPostData);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("dd");
    dispatch(createPosts(postData));
    setPostData(initialPostData);
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={submitHandler}
      >
        <Typography variant="h6">Createing a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <Button className={classes.buttonSubmit} type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
