import React from "react";

const styles = {
  header: {
    background: "linear-gradient(135deg, #38a8ca, #a6c0c9)",
    // background: linear-gradient(140deg, rgba(71, 71, 71, 0.90), rgba(81, 87, 117, 0.90) );

  },
  h1: {
    fontSize: "56px",
    fontFamily: 'Acme, sans-serif',
  }, 
  p: {
    fontSize: "28px",
    fontFamily: 'Acme, sans-serif',
  }
}

const Header = () => (
  <div className="jumbotron" style={styles.header}>
    <h1 className="display-4" style={styles.h1}>Click-It-To-Win-It!</h1>
    <p className="lead" style={styles.p}>Click on an image to earn points,<br/> but don't click on any more than once in a row!</p>
    {/* <hr className="my-4"></hr>
    <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p> */}
  </div>
); 

export default Header; 