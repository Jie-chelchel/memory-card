import axios from "axios";
//action creator
const fetchAll = (data) => {
  return { type: "FETCH_ALL", payload: data };
};
const createNew = (input) => {
  return { type: "CREATE_NEW", payload: input };
};

export const getPosts = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        console.log(res);
        dispatch(fetchAll(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createPosts = (input) => {
  return (dispatch) => {
    axios.post("http://localhost:5000/posts", input).then((res) => {
      dispatch(createNew(res.data));
    });
  };
};
