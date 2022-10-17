import React from "react";
import info from "./info.json";
class PostList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="list">
        {info.map((item) => (
          <div className="title">
            {<h1>{item.title}</h1>}
            {<h2>{item.content}</h2>}
          </div>
        ))}
      </div>
    );
  }
}

export default PostList;
