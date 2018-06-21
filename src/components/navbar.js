import React from "react";

const styles = {
  logo: {
    fontSize: "32px"
  },
  guide: {
    fontSize: "24px"
  },
  navbar: {
    background: "#202020",
    color: "#ffffff", 
  },
  scoreBoard: {
    fontSize: "36px"
  }
}

const Nav = props => (
  <nav className="navbar navbar-expand-lg sticky-top" style={styles.navbar}>
    <h1 className="navbar-brand" style={styles.logo} href="#">Click-It-To-Win-It!</h1>

    {/* <div className="guide mx-auto" style={styles.guide}>Click an Image to Begin!</div> */}
    
    <div className="scoreboard ml-auto d-flex">
      <h4>User Score: <span className="p-2" id="userScore" style={styles.scoreBoard}>{props.userScore}</span></h4>
      <h4>Top Score: <span className="p-2" id="topScore" style={styles.scoreBoard}>{props.topScore}</span></h4>
    </div>
  </nav>
); 

export default Nav;
