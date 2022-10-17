import React from "react";

class Shop extends React.Component {
  constructor() {
    super();
  }
  error = () => {
    throw new Error("Sorry");
  };
  componentDidMount() {
    this.error();
  }

  render() {
    return (
      <>
        <h1>No Shop</h1>
      </>
    );
  }
}

export default Shop;
