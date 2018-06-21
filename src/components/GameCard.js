import React from "react";
import Radium from 'radium';

const styles = {
  img: {
    height: "250px",
    width: "250px",
    margin: "15px",
    border: "5px solid #202020",
    padding: "15px",
    background: "#ECEFF1",
    borderRadius: "20px",
    ':hover': {
      boxShadow: "15px 15px 10px #202020"
      // height: "280px",
      // width: "280px",
      // margin: "0px",

    },
  }
}

let GameCard = props => (
  <img 
    className="clickImg img-fluid" 
    id={props.id}
    alt={props.alt} 
    src={props.image} 
    style={styles.img}
    onClick={() => {
      props.selectImage(props.id);
    }}
  />
);

GameCard = Radium(GameCard);

export default GameCard; 