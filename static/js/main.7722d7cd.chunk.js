(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(14),i=n.n(s),l=(n(24),n(8)),a=n(2),o=n(15),h=n(16),d=n(19),j=n(18),u=n(0),b=function(e){var t=e.cell,n="#182C61";1===t?n="#99e600":2===t&&(n="#ff99ff");var r={backgroundColor:n};return Object(u.jsx)("div",{className:"circle",style:r})},f=function(e){var t=e.row,n=e.col,r=e.cell,c=e.onClickHandler;return Object(u.jsx)("div",{className:"squareGrid",onClick:function(){return c(t,n)},children:Object(u.jsx)(b,{cell:r})})},p=function(e){for(var t=[],n=0;n<7;n++)t.push(Object(u.jsx)(f,{cell:e.cells[n],row:e.row,col:n,onClickHandler:e.onClickHandler},n));return Object(u.jsxs)("div",{style:{display:"flex"},children:[" ",t," "]})},O=function(e){console.log(e);for(var t=[],n=5;n>=0;n--)t.push(Object(u.jsx)(p,{row:n,cells:e.cells[n],onClickHandler:e.onClickHandler},n));return Object(u.jsx)("div",{children:t})},x=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var r;Object(o.a)(this,n),(r=t.call(this,e)).onClickHandler=function(e,t){for(var n=r.state.cells,c=[],s=0;s<6;s++)c.push(n[s].slice());if(r.checkForTie(n)&&(console.log("tie"),r.setState({tie:!0})),!r.state.winner){console.log("temp is"+c);var i=r.rowWhereCoinBeAdded(t);console.log(i),c[i][t]=r.state.player?1:2,r.setState({cells:c,player:!r.state.player},(function(){r.checkWinner(i,t)>0&&(console.log("winner"),r.setState({winner:r.state.player?2:1}))}))}},r.rowWhereCoinBeAdded=function(e){for(var t=0;t<6;t++)if(0===r.state.cells[t][e])return t;return-1},r.checkForTie=function(e){for(var t=0;t<e.length;t++)for(var n=0;n<e[t].length;n++)if(0===e[t][n])return!1;return!0},r.restartGame=function(){for(var e=[],t=0;t<6;t++)e.push(new Array(7).fill(0));r.setState({cells:e,tie:!1,player:!1,winner:0})},r.checkHorizontalWinner=function(e,t){for(var n=r.state.cells,c=6,s=r.state.player?2:1;c>=3;){if(n[e][c]===s&&n[e][c-1]===s&&n[e][c-2]===s&&n[e][c-3]===s)return 1;c--}return 0},r.checkVerticalWinner=function(e,t){var n=r.state.cells,c=r.state.player?2:1;return e>=3&&n[e][t]===c&&n[e-1][t]===c&&n[e-2][t]===c&&n[e-3][t]===c?1:0},r.checkWinner=function(e,t){return r.checkHorizontalWinner(e,t)||r.checkVerticalWinner(e,t)||r.checkDiagonal(e,t)};for(var c=[],s=0;s<6;s++)c.push(new Array(7).fill(0));return r.state={cells:c,player:!1,winner:0,tie:!1},r}return Object(h.a)(n,[{key:"checkDiagonal",value:function(e,t){for(var n=this.state.cells,r=this.state.player?2:1,c=e,s=t;c<5&&s<6;)c++,s++;for(;c>=3&&s>=3;){if(n[c][s]===r&&n[c-1][s-1]===r&&n[c-2][s-2]===r&&n[c-3][s-3]===r)return 1;c--,s--}for(var i=e,l=t;i<5&&l>0;)i++,l--;for(;i>=3&&l<=3;){if(n[i][l]===r&&n[i-1][l+1]===r&&n[i-2][l+2]===r&&n[i-3][l+3]===r)return 1;i--,l++}return 0}},{key:"render",value:function(){var e=this,t="";return t=this.state.winner>0?1===this.state.winner?Object(u.jsx)("p",{class:"green center",children:" Player 1 win"}):Object(u.jsx)("p",{class:"green center",children:" Player 2 win"}):this.state.player?Object(u.jsx)("p",{class:"green center",children:"Player 2's Turn"}):!this.state.winner&&this.state.tie?Object(u.jsx)("p",{class:"green center",children:"Its a Tie"}):Object(u.jsx)("p",{class:"green center",children:" Player 1's Turn"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"status",children:t}),Object(u.jsx)(O,{cells:this.state.cells,onClickHandler:this.onClickHandler}),Object(u.jsx)("button",{className:"btn-restart green",onClick:function(){return e.restartGame()},children:"Restart"})]})}}]),n}(r.Component);function v(){return Object(u.jsxs)(l.a,{children:[Object(u.jsxs)("div",{class:"name",children:[Object(u.jsxs)("button",{children:[" ",Object(u.jsx)(l.b,{to:"/",class:"link",children:"Home"})," "]}),"\xa0\xa0\xa0",Object(u.jsxs)("button",{children:[" ",Object(u.jsx)(l.b,{to:"/about",class:"link",children:"Game"})," "]}),"\xa0\xa0\xa0",Object(u.jsx)("hr",{})]}),Object(u.jsxs)(a.c,{children:[Object(u.jsx)(a.a,{exact:!0,path:"/",children:Object(u.jsx)(w,{})}),Object(u.jsx)(a.a,{path:"/about",children:Object(u.jsx)(g,{})})]})]})}function w(){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{class:"home",children:[Object(u.jsx)("h2",{class:"green ",children:"Intructions:"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"This game is played on a vertical board wich has seven hollow columns and six rows."}),Object(u.jsx)("li",{children:"Each column has a hole in the upper part of the board, where pieces are introduced."}),Object(u.jsx)("li",{children:"There is a window for every square, so that pieces can be seen from both sides."}),Object(u.jsx)("li",{children:"In short, it\xb4s a vertical board with 42 windows distributed in 6 rows and 7 columns."}),Object(u.jsx)("li",{children:"Both players have a set of 21 thin pieces (like coins); each of them uses a different colour."}),Object(u.jsx)("li",{children:"The board is empty at the start of the game."})]}),Object(u.jsx)("h2",{class:"green ",children:"Objective:"}),Object(u.jsx)("p",{children:"The aim for both players is to make a straight line of four own pieces; the line can be vertical, horizontal or diagonal."}),Object(u.jsx)("h2",{class:"green ",children:"How the game goes on:"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Before starting, players decide randomly which of them will be the beginner; moves are made alternatively, one by turn."}),Object(u.jsx)("li",{children:"Moves entails in placing new pieces on the board; pieces slide downwards from upper holes, falling down to the last row or piling up on the last piece introduced in the same column."}),Object(u.jsx)("li",{children:"So, in every turn the introduced piece may be placed at most on seven different squares."}),Object(u.jsx)("li",{children:"The winner is the first player who gets a straight line made with four own pieces and no gaps between them."})]})]})})}function g(){return Object(u.jsxs)("div",{class:"board",children:[Object(u.jsx)("h2",{class:"green",children:"Welcome to Connect4 Game"}),Object(u.jsx)(x,{})]})}l.a,l.b,l.b,a.c,a.a,a.a;var m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),m()}},[[34,1,2]]]);
//# sourceMappingURL=main.7722d7cd.chunk.js.map