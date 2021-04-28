import React from "react";
import './board.css'
/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> */
class Board extends React.Component{
    constructor(props){
        super(props)
        this.state={
            player:1,
            board:  [[0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0]]
        }
    }
    render(){ 
        return (
            <div>
                <h2>Welcome to the Game</h2>
                <div id="outline">
                    <div class="selection">
                        <div class="in1">
                            <input class="input1" type="text" id="player1" placeholder="player1"></input>
                            <span class="red"></span>
                        </div>
                        <div class="in2">
                            <input class="input2" type="text" id="player2" placeholder="player2"></input>
                            <span class="green"></span>
                        </div>
                    </div>
                    <table>
                        <tbody>
                        <tr><td id="1"></td><td id="2"></td><td id="3"></td><td id="4"></td><td id="5"></td><td id="6"></td><td id="6"></td></tr>
                        <tr><td id="7"></td><td id="8"></td><td id="9"></td><td id="10"></td><td id="11"></td><td id="12"></td><td id="6"></td></tr>
                        <tr><td id="13"></td><td id="14"></td><td id="15"></td><td id="16"></td><td id="17"></td><td id="18"></td><td id="6"></td></tr>
                        <tr><td id="19"></td><td id="20"></td><td id="21"></td><td id="22"></td><td id="23"></td><td id="24"></td><td id="6"></td></tr>
                        <tr><td id="25"></td><td id="26"></td><td id="27"></td><td id="28"></td><td id="29"></td><td id="30"></td><td id="6"></td></tr>
                        <tr><td id="31"></td><td id="32"></td><td id="33"></td><td id="34"></td><td id="35"></td><td id="36"></td><td id="6"></td></tr>
                        </tbody>
                    </table>
                </div>
                <h3 id="player"></h3>
                <h2 id="result"></h2>
                <div id="start"></div>
            </div>
        );
    }
    
checkWinner = (b) =>{
    let w = (this.checkVertical(b) || this.checkDiagonalRight(b) || this.checkDiagonalLeft(b) || this.checkHorizontal(b))
        if(w === 1){
            document.getElementById("player").style.display = "none";
            document.getElementById("result").innerHTML = "player 1 won the Game"
            document.getElementById("start").innerHTML=`<button class="btn" onclick=${"location.reload()"}>play Again</button>`;
            // document.getElementById("outline").style.display = "none";
            // break;
        }
        else if(w === 2){
            document.getElementById("player").style.display = "none";
            document.getElementById("result").innerHTML = "player 2 won the Game";
            document.getElementById("start").innerHTML=`<button class="btn" onclick=${"location.reload()"}>play Again</button>`;
            // document.getElementById("outline").style.display = "none";
            // break;
        }
        // return w
    }
    checkVertical(board) {
        for (let r = 3; r < 6; r++) {
        for (let c = 0; c < 7; c++) {
            if (board[r][c]) {
            if (board[r][c] === board[r - 1][c] &&
                board[r][c] === board[r - 2][c] &&
                board[r][c] === board[r - 3][c]) {
                return board[r][c];    
            }
            }
        }
        }
    }

    checkHorizontal(board) {
        for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 4; c++) {
            if (board[r][c]) {
            if (board[r][c] === board[r][c + 1] && 
                board[r][c] === board[r][c + 2] &&
                board[r][c] === board[r][c + 3]) {
                return board[r][c];
            }
            }
        }
        }
    }
    
    checkDiagonalRight(board) {
        for (let r = 3; r < 6; r++) {
        for (let c = 0; c < 4; c++) {
            if (board[r][c]) {
            if (board[r][c] === board[r - 1][c + 1] &&
                board[r][c] === board[r - 2][c + 2] &&
                board[r][c] === board[r - 3][c + 3]) {
                return board[r][c];
            }
            }
        }
        }
    }
    
    checkDiagonalLeft(board) {
        for (let r = 3; r < 6; r++) {
        for (let c = 3; c < 7; c++) {
            if (board[r][c]) {
            if (board[r][c] === board[r - 1][c - 1] &&
                board[r][c] === board[r - 2][c - 2] &&
                board[r][c] === board[r - 3][c - 3]) {
                return board[r][c];
            }
            }
        }
        }
    }
        
    componentDidMount() {
        const grid= document.getElementById("outline");
        const cells = grid.getElementsByTagName("td");
        for(let i=0; i < cells.length; i=i++){
            document.getElementById("player").innerHTML="player 1 Turn"
            cells[i].addEventListener("click", ()=>{
                const col = i%7
                const row = Math.floor(i/7)
                if(this.state.player==1 && cells[i].style.backgroundColor!="green" && cells[i].style.backgroundColor!="red"){
                    document.getElementById("player").innerHTML='<span style="font-size:30px; background-color:green">player 2 Turn  </span>';
                    // console.log(row, col)
                    // for(let j=i; j<cells.length; j=j+6){     
                    //     if(cells[j].style.backgroundColor!="red" & cells[j].style.backgroundColor!="green"){
                            
                    //         const a=j
                    //         cells[j].style.backgroundColor="red";
                    //         cells[j-6].style.backgroundColor="white"
                    //         cells[a].style.backgroundColor="white"
                    //     }
                    // }
                    console.log(i)
                    cells[i].style.backgroundColor="red";
                    var b = this.state.board
                    b[row][col] = 1
                    this.setState({board: b})
                    // console.log(this.state.board, row, col)
                    this.checkWinner(b)
                    this.setState({player:2});
                    // console.log(i)
                    // this.CALL(i)
                    // this.setState({player:2});
                }
                else if(this.state.player==2 && cells[i].style.backgroundColor!="red" && cells[i].style.backgroundColor!="green"){
                    document.getElementById("player").innerHTML='<span style="font-size:30px; background-color:red">player 1 Turn  </span>';
                    cells[i].style.backgroundColor="green";
                    // cells[(i-1)].style.backgroundColor="None"
                    b = this.state.board
                    b[row][col] = 2
                    this.setState({board: b})
                    // console.log(this.state.board, row, col)
                    this.checkWinner(b)
                    this.setState({player:1});
                    // console.log(i)
                    // this.CALL(i)
                    // var row=Math.floor(i/6)
                    // var col=i%6
                    // // console.log(row, col)
                    // this.setState({player:1});
                }
            });
        }
    }
}
export default Board;