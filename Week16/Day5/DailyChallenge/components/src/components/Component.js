export const Component = (props) => {
  return (
    <div
      style={{
        width: "80vw",
        height: "40vh",
        border: "1px solid grey",
        textAlign: "center",
        margin: "20px",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "white",
      }}
    >
      <h4 style={{ fontSize: "40px", marginLeft: "20px", color: "grey" }}>{props.title}</h4>
      <h1 style={{ fontSize: "250px", marginTop: "20px" }}>{props.number}</h1>
    </div>
  );
};
