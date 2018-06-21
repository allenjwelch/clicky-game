import React from "react";

const styles = {
  logo: {
    fontSize: "32px"
  },
  guide: {
    fontSize: "24px"
  },
  navbar: {
    background: "#050505",
    color: "#ffffff", 
  }
}

const Nav = props => (
  <nav className="navbar navbar-expand-lg" style={styles.navbar}>
    <h1 className="navbar-brand" style={styles.logo} href="#">Click-It-To-Win-It!</h1>

    {/* <div className="guide mx-auto" style={styles.guide}>Click an Image to Begin!</div> */}
    
    <div className="scoreboard ml-auto d-flex">
      <h4>User Score: <span className="p-2" id="userScore">{props.userScore}</span></h4>
      <h4>Top Score: <span className="p-2" id="topScore">{props.topScore}</span></h4>
    </div>
  </nav>
); 

export default Nav;
