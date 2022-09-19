import "./Exercise4.css";
const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

function Exercise4() {
  return (
    <>
      <h1 style={style_header}>Header</h1>
      <p>Paragraph</p>
      <a href="#">This is a link</a>
      <form>
        This is a form: <label for="text">Enter your name</label>
        <input type="text" name="text"></input>
        <button>Submit</button>
      </form>
      This is an image:
      <img src="https://thumbs.dreamstime.com/z/many-small-links-young-woman-wearing-eye-glasses-208952073.jpg"></img>
    </>
  );
}

export default Exercise4;
