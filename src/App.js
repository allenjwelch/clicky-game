import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import cardData from "./cardData.json"; 

class App extends Component {

  state = {
    cardData,
    Main,
    userSelect: '',
    userScore: 0,
    topScore: 0
  }

  render() {
    return (
      <div className="App">
        <Nav userScore={this.state.userScore} topScore={this.state.topScore}/>
        <Header />
        <Main>
          {this.state.cardData.map(card =>
            <GameCard key={card.id}
              {...card}
              selectImage={(id) => {
                // TODO: set current state for selected image Id
                this.setState({userSelect: id})
                
                // this.setState(prevState => ({
                //   userSelect: id
                // }));
                  
                // this.setState((prevState, props) => {
                //   return {userSelect: this.state.userSelect = id};
                // });
                  
                console.log('image id: ' + this.state.userSelect); 
                    
                // TODO: JS function for game play and updating user score
                // this.setState({userScore : this.state.userScore + 1})
                // console.log('userScore: ' + this.state.userScore);

                this.setState((prevState) => {
                  if (this.state.userSelect === prevState.userSelect) {
                    console.log('wrong')
                    console.log('userScore: ' + this.state.userScore);
                    return ({userScore : 0})
                  } else {
                    console.log('userScore: ' + this.state.userScore);
                    if (this.state.topScore <= this.state.userScore) {
                      return ({
                        userScore : this.state.userScore + 1,
                        topScore : this.state.topScore + 1
                      })
                    } else if (this.state.topScore >= this.state.userScore) {
                      return ({
                        userScore : this.state.userScore + 1,
                      })
                    }
                  }
                  // return { score: prevState.score + 1 }
                })
                // if (this.state.userSelect === prevState.userSelect) {
                //   console.log('wrong')
                // }

                // TODO: Updating Top score
                // this.setState({topScore : this.state.topScore + 1})
                // console.log('topScore: ' + this.state.topScore);

              }}
            />
          )}
        </Main>
        <Footer />
      </div>
    );
  }
}


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
