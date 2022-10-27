import image from "./image.png";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../redux/actions";
function Home(props) {
  return (
    <>
      <div>
        {props.posts.map((post, index) => {
          return (
            <div key={post.id}>
              <h1>
                <Link to={`/posts/${index}`}>{post.title}</Link>
              </h1>
              <p>{post.body}</p>
              <button
                onClick={() => {
                  props.deleteThis(index);
                }}
              >
                Delete Post
              </button>
            </div>
          );
        })}
      </div>

      <img src={image} alt="BlogImage" />
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteThis: (index) => dispatch(deletePost(index)),
  };
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
