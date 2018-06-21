import React from "react";

const styles = {
  main: {
    paddingTop: "50px",
    // background: "#38a8ca",
    background: "linear-gradient(45deg, #a6c0c9, #38a8ca)",
    height: "100%",
    display: "flex",
    flexFlow: "row wrap",
    padding: "20px",
    justifyContent: "space-around",
    alignContent: "flex-start",
    overflow: "auto",
  }
}

const Main = props => <div className="main" style={styles.main}>{props.children}</div>;

export default Main;