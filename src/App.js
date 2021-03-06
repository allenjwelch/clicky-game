import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import cardData from "./cardData.json"; 

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const correct = ["Nice!", "Good Job!", "Doing Great!"];
const incorrect = ["Oh no!", "You can do better..", "What was that?"];

class App extends Component {
  
  state = {
    brand: "Click-It-To-Win-It!",
    userSelect: '',
    userScore: 0,
    topScore: 0
  }
  
  
  render() {
    const shuffledCards = shuffleArray(cardData);
    const randCorrect = correct[Math.floor((Math.random() * (correct.length -1)) + 1)];
    const randIncorrect = incorrect[Math.floor((Math.random() * (incorrect.length -1)) + 1)];
    
    return (
      <div className="App">
        <Nav userScore={this.state.userScore} topScore={this.state.topScore} brand={this.state.brand}/>
        <Header />
        <Main>
          {shuffledCards.map(card =>
            <GameCard key={card.id}
              {...card}
              selectImage={(id) => {
                // Set current state for selected image Id
                this.setState({userSelect: id})
                                                      
                // JS function for game play and updating user score
                this.setState((prevState) => {
                  if (this.state.userSelect === prevState.userSelect) {
                    return ({
                      userScore : 0,
                      brand: randIncorrect
                    })
                  } else {
                    if (this.state.topScore <= this.state.userScore) {
                      return ({
                        userScore : this.state.userScore + 1,
                        topScore : this.state.topScore + 1,
                        brand: randCorrect
                      })
                    } else if (this.state.topScore >= this.state.userScore) {
                      return ({
                        userScore : this.state.userScore + 1,
                        brand: randCorrect
                      })
                    }
                  }
                })
              }}
            />
          )}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
