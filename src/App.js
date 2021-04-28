import React from "react";
import {BrowserRouter as Router, Switch,Route, Link,  useParams} from "react-router-dom";
import Board from "./components/Board";
export default function App() {
  return (
    <Router>
		<div class="name">
			{/* <h1>Welcome to Routing</h1> */}
		<button>	<Link to="/" class="link">Home</Link> </button>&nbsp;&nbsp;&nbsp;
		<button>	<Link to="/about" class="link">Game</Link> </button>&nbsp;&nbsp;&nbsp;
			<hr/>
		</div>
		
		<Switch>
		  <Route exact path="/">
			<Home />
		  </Route>
		  <Route path="/about">
			<About />
		  </Route>
	

	
		  
		</Switch>
	</Router>
  );
}



<Router>
      <div class="margin">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Game</Link>
          </li>
 
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
      
        </Switch>
      </div>
    </Router>

	
	
	
// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      {/* <h2>Home Page is Loaded</h2> */}


      <div class="home">
      {/* <h2>Home</h2> */}
      <h2 class="green ">Intructions:</h2>
      <ul>
        {/* <h3 class="green ">Description</h3> */}
        {/* <img src={connect4} class="img"/> */}

        <li>This game is played on a vertical board wich has seven hollow columns and six rows.</li>
        <li>Each column has a hole in the upper part of the board, where pieces are introduced.</li> 
        <li>There is a window for every square, so that pieces can be seen from both sides.</li>
        <li>In short, it´s a vertical board with 42 windows distributed in 6 rows and 7 columns.</li> 
        <li>Both players have a set of 21 thin pieces (like coins); each of them uses a different colour.</li>
        <li>The board is empty at the start of the game.</li>
      </ul>
      <h2 class="green ">Objective:</h2>
      <p>The aim for both players is to make a straight line of four own pieces; the line can be vertical, horizontal or diagonal.</p>
      <h2 class="green ">How the game goes on:</h2>
      <ul>
      <li>Before starting, players decide randomly which of them will be the beginner; moves are made alternatively, one by turn.</li>
      <li>Moves entails in placing new pieces on the board; pieces slide downwards from upper holes, falling down to the last row or piling up on the last piece introduced in the same column.</li>
      <li>So, in every turn the introduced piece may be placed at most on seven different squares.</li>
      <li>The winner is the first player who gets a straight line made with four own pieces and no gaps between them.</li>
      </ul>
    </div>

    </div>
  );
}

function About() {
		
  return (
    <div class="board">
      <h2 class="green">Welcome to Connect4 Game</h2>
     
      <Board />
    </div> 
  );
}