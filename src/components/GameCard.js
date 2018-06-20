import React from "react";
import Radium from 'radium';

const styles = {
  img: {
    height: "150px",
    width: "150px",
    margin: "20px",
    border: "5px solid #3cbae0",
    padding: "15px",
    ':hover': {
      boxShadow: "10px 10px 10px #cccccc"
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