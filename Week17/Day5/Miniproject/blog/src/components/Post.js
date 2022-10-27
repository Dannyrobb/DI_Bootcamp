import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const Post = (props) => {
  const params = useParams();
  const postData = props.posts[params.post_id];
  console.log(postData);
  return (
    <>
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Post);
