import React from "react";
class FavoriteColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      colorMessage: null,
      beforeColor: null,
    };
  }

  colorChange = () => {
    this.setState({ favoriteColor: "pink" });
  };

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    this.setState({ colorMessage: `My Favorite color is${this.state.favoriteColor}` });
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ favoriteColor: "yellow" });
  //   }, 5000);
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    this.setState({ beforeColor: prevState.favoriteColor });
    return null;
  }

  render() {
    return (
      <>
        <button onClick={this.colorChange}>My favorite color is {this.state.favoriteColor}</button>
        <div>{this.state.colorMessage && this.state.colorMessage}</div>
        <div>{this.state.beforeColor && this.state.beforeColor}</div>
      </>
    );
  }
}

export default FavoriteColor;
