import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="formContainer">
        <h1>Form</h1>
        <form>
          <div id="top">
            <input type="text" name="fname" placeholder="First Name" onChange={this.props.handleChange} value={this.props.fname}></input>
            <input type="text" name="lname" placeholder="Last Name" onChange={this.props.handleChange} value={this.props.lname}></input>
            <input type="number" name="age" placeholder="Age" onChange={this.props.handleChange} value={this.props.age}></input>
          </div>
          <div id="radio" name="radio" onChange={this.props.handleChange} value={this.props.gender}>
            <label htmlFor="male">Male</label>
            <input type="radio" name="male"></input>
            <label htmlFor="female">Female</label>
            <input type="radio" name="female"></input>
          </div>
          <div id="select">
            <select name="destination" placeholder="Select a destination.." value={this.props.value} onChange={this.props.handleChange}>
              {/* <option defaultValue="" disabled selected hidden>
                Choose a destination
              </option> */}
              <option defaultValue="Greece" name="greece">
                Greece
              </option>
              <option defaultValue="Prague" name="prague">
                Prague
              </option>
            </select>
          </div>
          <div id="checkBox">
            <input type="checkbox" id="nutsFree" name="nutsfree" onChange={this.props.handleNutChange}></input>
            <label htmlFor="nutsFree">Nuts Free</label>

            <input type="checkbox" id="dairyfree" name="dairyfree" onChange={this.props.handleDairyChange}></input>
            <label htmlFor="dairyfree">Dairy free</label>

            <input type="checkbox" id="vegan" name="vegan" value="Vegan" onChange={this.props.handleVeganChange}></input>
            <label htmlFor="Vegan">Vegan</label>
          </div>
          <button id="btn" name="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
