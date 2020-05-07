(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{16:function(e,a,t){e.exports=t(28)},21:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(3),c=t.n(s),i=(t(21),t(4)),r=t(2),u=(t(22),t(11)),o=t(14),m=(t(25),function(){return l.a.createElement("div",{className:"any"},l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title"},"Sudoku"),l.a.createElement("h2",{className:"subtitle"},"Built with React"))))}),d=function(e){var a=e.solve,t=e.solveEnabled,n=e.newGame,s=e.loadGame,c=e.loadEnabled,i=e.handleShowCandidatesClicked,r=e.showCandidates,u=e.startOver,o=e.startOverEnabled,m=e.markThisCell,d=e.markThisCellEnabled,f=e.showAlert,p=e.saveGame;return l.a.createElement("div",{className:"tools"},l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{className:"button is-link",onClick:a,disabled:!t}," Hint "),l.a.createElement("button",{className:"button is-success",onClick:n}," New Game "),l.a.createElement("button",{className:"button is-danger",onClick:u,disabled:!o}," Start Over "),l.a.createElement("button",{className:"button is-primary",onClick:m,disabled:!d}," Mark This Celll "),l.a.createElement("button",{className:"button is-info",onClick:f}," Select Difficulty "),l.a.createElement("button",{className:"button is-success",onClick:p}," Save Game "),l.a.createElement("button",{className:"button is-warning",onClick:s,disabled:!c}," Load Game "),l.a.createElement("button",{className:"button is-primary",onClick:i},r?"Hide Possible Values":"Show Possible Values")))},f=function(e){var a=e.handleChange,t=e.handleFocus,n=e.cellValues,s=e.cellBackgroundColors,c=e.id,i=parseInt(c)%3===1&&parseInt(c)>1?"square-sep":"square";return l.a.createElement("tr",{className:i},[1,2,3,4,5,6,7,8,9].map((function(e){var i=c+e,r=function(e,a){var t=9*(parseInt(e)-1)+parseInt(a)-1;return n[t]}(c,e),u=function(e,a){var t=9*(parseInt(e)-1)+parseInt(a)-1;return s[t]+" squareinp"}(c,e),o=parseInt(e)%3===1&&parseInt(e)>1?"square-septd":"square";return l.a.createElement("td",{className:o,key:i},l.a.createElement("input",{id:i,key:i,type:"text",name:"name",className:u,onChange:function(e){return a(e)},onFocus:function(e){return t(e)},value:r}))})))},p=function(e){var a=e.handleChange,t=e.handleFocus,n=e.cellValues,s=e.cellBackgroundColors;return l.a.createElement("div",{className:"container"},l.a.createElement("hr",null),l.a.createElement("div",{className:"card"},l.a.createElement("table",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("tbody",null,[1,2,3,4,5,6,7,8,9].map((function(e){return l.a.createElement(f,{key:e,handleChange:a,handleFocus:t,cellValues:n,cellBackgroundColors:s,id:e.toString()})}))))),l.a.createElement("hr",null))},h=function(e){var a=e.gameId,t=e.gameDifficulty,n=e.complexity,s=e.numberOfEmptyCells,c="hard"===t?"danger":"easy"===t?"success":"warning";return l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("article",{className:"panel is-white"},l.a.createElement("p",{className:"panel-heading",style:{display:"flex",justifyContent:"center"}},"Game Info"),l.a.createElement("p",{className:"panel-subheading",style:{display:"flex",justifyContent:"center"}},"Game ID: ",a),l.a.createElement("br",null),l.a.createElement("div",{className:"difficulty",style:{display:"flex",justifyContent:"center"}},l.a.createElement("button",{className:"button is-".concat(c)},t)),l.a.createElement("div",{className:"panel-block"},l.a.createElement("span",{className:"panel-icon"},l.a.createElement("i",{className:"fas fa-book","aria-hidden":"true"})),"Empty Cells : ",s),l.a.createElement("div",{className:"panel-block"},l.a.createElement("span",{className:"panel-icon"},l.a.createElement("i",{className:"fas fa-book","aria-hidden":"true"})),"Complexity : ",n)),l.a.createElement("br",null))},b=function(e){var a=e.gamesWon,t=e.hintsUsed,n=e.showCandidates,s=e.candidates;return l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("article",{className:"message is-warning"},l.a.createElement("div",{className:"message-header"},l.a.createElement("p",null,"Games Won")),l.a.createElement("div",{className:"message-body"},a)),l.a.createElement("article",{className:"message is-warning"},l.a.createElement("div",{className:"message-header"},l.a.createElement("p",null,"Hints Used")),l.a.createElement("div",{className:"message-body"},t)),n&&l.a.createElement("article",{className:"message is-warning"},l.a.createElement("div",{className:"message-header"},l.a.createElement("p",null,"Possible Values")),l.a.createElement("div",{className:"message-body"},s.toString())))},v=t(5),y=t.n(v),g={id:1,difficulty:"easy",str:";;;;2;3;;;;;5;6;;;4;;1;2;;3;7;;;;;;5;;;2;;;;;6;;1;8;;;;;;9;7;;9;;;;;2;;;4;;;;;;8;3;;7;2;;3;;;6;5;;;;;6;9;;;;;"},E={id:2,difficulty:"easy",str:";;;;;9;;;6;;;;;;3;8;5;1;;6;2;;1;5;;;;;;7;;;;;6;;;2;1;9;7;6;3;8;;;3;;;;;1;;;;;;4;5;;9;7;;2;5;8;6;;;;;;4;;;3;;;;;;"},C={id:3,difficulty:"easy",str:"2;9;;;7;4;;;;;1;;;;;4;;;6;7;;9;;5;;;;;8;;2;;6;;;;;6;;8;4;7;;2;;;;;5;;1;;8;;;;;7;;8;;9;2;;;6;;;;;1;;;;;4;1;;;5;8;"},N={id:4,difficulty:"easy",str:"4;;;;9;;;7;;;;;2;;6;9;;;;;;;;7;;;2;3;8;;9;;;;;1;;2;4;;;;6;3;;9;;;;;3;;5;4;8;;;4;;;;;;;;1;6;;8;;;;;9;;;7;;;;5;"},w={id:5,difficulty:"medium",str:"6;3;;;;;;;;7;;4;;;5;;;;;1;5;;4;;;;6;5;;7;;;8;;;;;8;;;2;;;1;;;;;5;;;3;;7;4;;;;6;;1;7;;;;;9;;;2;;5;;;;;;;;4;3;"},O={id:6,difficulty:"medium",str:";8;3;;;2;;1;;;;;;3;;;;4;;2;7;;;;;;8;;;5;;7;;;3;;;;;5;8;6;;;;;6;;;4;;1;;;9;;;;;;5;7;;3;;;;1;;;;;;7;;6;;;4;9;;"},k={id:7,difficulty:"medium",str:";9;6;;4;;;3;;;5;7;8;2;;;;;1;;;9;;;5;;;;;9;;1;;;;8;5;;;;;;;;2;4;;;;9;;6;;;;;4;;;3;;;1;;;;;7;9;2;6;;;2;;;5;;9;8;;"},j={id:8,difficulty:"medium",str:";;7;;;;9;;8;;3;;1;7;;;;4;;;;;;6;;;;6;9;8;7;4;;3;;;;;3;;1;;4;;;;;1;;3;9;7;6;2;;;;4;;;;;;9;;;;5;1;;4;;4;;5;;;;1;;;"},S={id:9,difficulty:"medium",str:";;;;2;;;7;;;;;;3;4;;;;3;5;8;;;;;;;5;;4;8;;;;;;;;;1;;;;8;9;;;2;;;;;;6;2;4;;;;;7;;;;9;;;;5;2;;;;;;;6;7;1;;;"},I={id:10,difficulty:"hard",str:";;6;;;5;;;;1;9;;;;;;;;;;7;;1;2;;4;;3;7;;;9;1;;5;;8;;;;;;;;1;;1;;7;5;;;6;3;;4;;1;7;;6;;;;;;;;;;1;9;;;;5;;;8;;;"},x={id:11,difficulty:"hard",str:"9;8;1;;;6;4;5;;;;;4;;;1;;7;;;;;;;;;;;;;;2;;;4;;1;;9;;;;2;;3;;3;;;1;;;;;;;;;;;7;;;6;;3;;;5;;;;;1;8;9;;;5;2;6;"};function B(e){return 9*(parseInt(e[0])-1)+parseInt(e[1])-1}function G(e,a){return 3*Math.floor((e-1)/3)+Math.floor((a-1)/3)+1}function H(e){var a=0,t=[];return e.map((function(e){var n=function(e,a){var t=parseInt(e)+1,n=Math.floor(t/9)+1,l=t%9;0===l&&(n-=1,l=9);a=parseInt(a)||0;var s=G(n,l);return{row:n,column:l,cube:s,value:a}}(a,e);t.push(n),a++})),t}function A(e,a){var t=parseInt(a[0]),n=parseInt(a[1]);return V(e,t,n,G(t,n))}function V(e,a,t,n){var l=F(H(e),a,t,n);return u.a.difference([1,2,3,4,5,6,7,8,9],l.knownValues)}function F(e,a,t,n){var l=[],s=[];return e.map((function(e){if(parseInt(e.value)>0&&(e.row===a||e.column===t||e.cube===n)){var c={row:e.row,column:e.column,cube:e.cube,value:e.value};l.push(e.value),s.push(c)}})),{knownValues:l,knownValuesObj:s}}function T(e){var a=H(e),t=0,n=0,l=1;return a.map((function(a){if(a.value>0)t++;else{n++;var s=V(e,a.row,a.column,a.cube);a.candidates=Object(i.a)(s),l*=s.length}})),{cells:a,filledCells:t,emptyCells:n,complexity:l}}function P(e){var a=T(e).cells,t=[];return["cube","row","column"].map((function(e){[1,2,3,4,5,6,7,8,9].map((function(n){var l=function(e,a,t){var n=[0,0,0,0,0,0,0,0,0],l=[],s=[];t.map((function(t){!t.value>0&&t[e]===a&&void 0!==t.candidates&&t.candidates.map((function(e){n[e-1]=n[e-1]+1,l[e-1]=t}))}));var c=-1;return n.map((function(a){if(c++,1===a&&l[c]){var t={value:c+1,detail:l[c],constrainedBy:e};s.push(t)}})),[].concat(s)}(e,n,a);l.length>0&&(t=[].concat(Object(i.a)(t),Object(i.a)(l)))}))})),t}var M=t(7),q=(t(27),function(e){var a=e.highlightCells,t=e.setHighlightCells;return l.a.createElement("div",null,l.a.createElement("button",{className:"button is-success",onClick:function(){return t((function(e){return!e}))}},"Cell Highlighting - ",a?"On":"Off"))}),D=t(15),W=t.n(D);var U=function(){var e=l.a.useState(!1),a=Object(r.a)(e,2),t=a[0],n=a[1],s=l.a.useState(0),c=Object(r.a)(s,2),u=c[0],f=c[1],v=l.a.useState(new Array(81).fill("bg-white")),D=Object(r.a)(v,2),U=D[0],Y=D[1],J=l.a.useState(new Array(81).fill("bg-white")),L=Object(r.a)(J,1)[0],R=l.a.useState(new Array(81).fill("5")),z=Object(r.a)(R,2),K=z[0],Q=z[1],X=l.a.useState(!0),Z=Object(r.a)(X,2),$=Z[0],_=Z[1],ee=l.a.useState("easy"),ae=Object(r.a)(ee,2),te=ae[0],ne=ae[1],le=l.a.useState(0),se=Object(r.a)(le,2),ce=se[0],ie=se[1],re=l.a.useState(null),ue=Object(r.a)(re,2),oe=ue[0],me=ue[1],de=l.a.useState(),fe=Object(r.a)(de,2),pe=fe[0],he=fe[1],be=l.a.useState(!1),ve=Object(r.a)(be,2),ye=ve[0],ge=ve[1],Ee=l.a.useState(null),Ce=Object(r.a)(Ee,2),Ne=Ce[0],we=Ce[1],Oe=l.a.useState(""),ke=Object(r.a)(Oe,2),je=ke[0],Se=ke[1],Ie=l.a.useState(null),xe=Object(r.a)(Ie,2),Be=xe[0],Ge=xe[1],He=l.a.useState(null),Ae=Object(r.a)(He,2),Ve=Ae[0],Fe=Ae[1],Te=l.a.useState(),Pe=Object(r.a)(Te,2),Me=Pe[0],qe=Pe[1],De=l.a.useState("First Message"),We=Object(r.a)(De,2),Ue=We[0],Ye=We[1],Je=l.a.useState(0),Le=Object(r.a)(Je,2),Re=Le[0],ze=Le[1],Ke=l.a.useState(!1),Qe=Object(r.a)(Ke,2),Xe=Qe[0],Ze=Qe[1],$e=l.a.useState(!1),_e=Object(r.a)($e,2),ea=_e[0],aa=_e[1],ta=l.a.useState([]),na=Object(r.a)(ta,2),la=na[0],sa=na[1],ca=function(){var e=function(){var e,a=[];return e={id:15,str:";;;;2;;;7;;;;;;3;4;;;;3;5;8;;;;;;;5;;4;8;;;;;;;;;1;;;;8;9;;;2;;;;;;6;2;4;;;;;7;;;;9;;;;5;2;;;;;;;6;7;1;;;",difficulty:"medium"},a.push(e),e={id:1,str:"6;3;;;;;;;;7;;4;;;5;;;;;1;5;;4;;;;6;5;;7;;;8;;;;;8;;;2;;;1;;;;;5;;;3;;7;4;;;;6;;1;7;;;;;9;;;2;;5;;;;;;;;4;3;",difficulty:"medium"},a.push(e),e={id:3,str:";8;3;;;2;;1;;;;;;3;;;;4;;2;7;;;;;;8;;;5;;7;;;3;;;;;5;8;6;;;;;6;;;4;;1;;;9;;;;;;5;7;;3;;;;1;;;;;;7;;6;;;4;9;;",difficulty:"medium"},a.push(e),e={id:4,str:";;6;;;5;;;;1;9;;;;;;;;;;7;;1;2;;4;;3;7;;;9;1;;5;;8;;;;;;;;1;;1;;7;5;;;6;3;;4;;1;7;;6;;;;;;;;;;1;9;;;;5;;;8;;;",difficulty:"hard"},a.push(e),e={id:6,str:"9;8;1;;;6;4;5;;;;;4;;;1;;7;;;;;;;;;;;;;;2;;;4;;1;;9;;;;2;;3;;3;;;1;;;;;;;;;;;7;;;6;;3;;;5;;;;;1;8;9;;;5;2;6;",difficulty:"hard"},a.push(e),e={id:2,str:";;;;2;3;;;;;5;6;;;4;;1;2;;3;7;;;;;;5;;;2;;;;;6;;1;8;;;;;;9;7;;9;;;;;2;;;4;;;;;;8;3;;7;2;;3;;;6;5;;;;;6;9;;;;;",difficulty:"easy"},a.push(e),e={id:7,str:";9;6;;4;;;3;;;5;7;8;2;;;;;1;;;9;;;5;;;;;9;;1;;;;8;5;;;;;;;;2;4;;;;9;;6;;;;;4;;;3;;;1;;;;;7;9;2;6;;;2;;;5;;9;8;;",difficulty:"medium"},a.push(e),e={id:5,str:"4;;;;9;;;7;;;;;2;;6;9;;;;;;;;7;;;2;3;8;;9;;;;;1;;2;4;;;;6;3;;9;;;;;3;;5;4;8;;;4;;;;;;;;1;6;;8;;;;;9;;;7;;;;5;",difficulty:"easy"},a.push(e),e={id:8,str:";;7;;;;9;;8;;3;;1;7;;;;4;;;;;;6;;;;6;9;8;7;4;;3;;;;;3;;1;;4;;;;;1;;3;9;7;6;2;;;;4;;;;;;9;;;;5;1;;4;;4;;5;;;;1;;;",difficulty:"medium"},a.push(e),e={id:9,str:";;;;;9;;;6;;;;;;3;8;5;1;;6;2;;1;5;;;;;;7;;;;;6;;;2;1;9;7;6;3;8;;;3;;;;;1;;;;;;4;5;;9;7;;2;5;8;6;;;;;;4;;;3;;;;;;",difficulty:"easy"},a.push(e),e={id:10,str:"2;9;;;7;4;;;;;1;;;;;4;;;6;7;;9;;5;;;;;8;;2;;6;;;;;6;;8;4;7;;2;;;;;5;;1;;8;;;;;7;;8;;9;2;;;6;;;;;1;;;;;4;1;;;5;8;",difficulty:"easy"},a.push(e),y.a.sample(a)}();ne(e.difficulty),ie(e.id);var a=e.str.split(";");a.pop(),Q(a),ia(),ra(e),f(0),Se("")},ia=function(){var e=new Array(81).fill("bg-white");Y(e)},ra=function(e){Fe(e.id)},ua=function(e,a){!function(e,a){if(e.length>0){var t=Object(i.a)(U);e.map((function(e){var n=B(e);t[n]="bg-"+a})),Y(t)}}(e,a),setTimeout((function(){Y(L)}),1e3)},oa=function(e,a){var t=Object(i.a)(K);t[B(e)]=a,Q(t)},ma=function(e,a){var t=new Array(81).fill("bg-white"),n=parseInt(e[0]),l=parseInt(e[1]),s=G(n,l),c=H(K),i=-1;c.map((function(e){i++,e.row!==n&&e.column!==l&&e.cube!==s||(e.row===n&&e.column===l&&e.cube===s?t[i]="bg-blue":t[i]="bg-"+a)})),Y(t)},da=function(e,a){if(!(parseInt(a)>0)){var t=A(K,e);Se(t)}},fa=function(e){var a=function(e){var a=[],t=[],n=[];switch(a.push(g),a.push(E),a.push(C),a.push(N),t.push(w),t.push(O),t.push(k),t.push(j),t.push(S),n.push(I),n.push(x),e){case"easy":return y.a.sample(a);case"medium":return y.a.sample(t);case"hard":return y.a.sample(n);default:return y.a.sample(a)}}(e);ne(a.difficulty),ie(a.id);var t=a.str.split(";");t.pop(),Q(t),ia()},pa=l.a.useState(!1),ha=Object(r.a)(pa,2),ba=ha[0],va=ha[1];l.a.useEffect((function(){ca();var e=T(K).emptyCells;qe(e)}),[]),l.a.useEffect((function(){$||Y(new Array(81).fill("bg-white"))}),[$]),l.a.useEffect((function(){var e=T(K),a=e.emptyCells,t=e.complexity;he(a),me(t),n(0!==a),Me!==a&&ge(!0),ye&&0===a&&(M.b.success("Congratulations! You Won!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),aa(!0),setTimeout((function(){aa(!1)}),5e3),ze((function(e){return e+1})),setTimeout((function(){ca()}),3e3))}),[K]),l.a.useEffect((function(){(function(e){var a=T(e).cells,t=!1;return a.map((function(e){if(0===e.value){var a=e.candidates;0!==a.length&&a!==[]||(t=!0)}})),t})(K)&&(M.b.error("HAHA! You Lost!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),aa(!0),setTimeout((function(){aa(!1)}),5e3),setTimeout((function(){ca()}),3e3))}),[K]);var ya=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\ud83e\udd84 Wow so easy!";Object(M.b)("".concat(e),{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},ga=l.a.useState(!1),Ea=Object(r.a)(ga,2),Ca=Ea[0],Na=Ea[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(M.a,null),ea&&l.a.createElement(W.a,null),l.a.createElement("section",{className:"hero is-fullheight"},l.a.createElement("div",{className:"container is-fluid"},l.a.createElement(m,null),l.a.createElement("div",{className:"container"},l.a.createElement(d,{solve:function(){var e=function(e){var a=H(e),t=9,n=[];return a.forEach((function(a){if(0===a.value){var l=V(e,a.row,a.column,a.cube);if(l.length<t){t=l.length;var s={cell:a,candidates:l};n.length>0&&n.pop(),n.push(s)}}})),n}(K),a=e[0].cell,t=e[0].candidates;if(1===t.length){var n=a.row,l=a.column,s="".concat(n).concat(l);ya("".concat(t," is the only number that can go into (row: ").concat(n,", column: ").concat(l,")")),f((function(e){return e+1})),ua([s],"coral"),oa(s,t)}else if(t.length>1){var c=P(K);if(c.length>=1){var i=c[0].value,r=c[0].detail,u=c[0].constrainedBy,o=r.row,m=r.column,d="".concat(o).concat(m);ya("although [".concat(t.toString(),"] can go into (row: ").concat(o,", column: ").concat(m,"),\n                ").concat(i," can only go in one place in this ").concat(u)),f((function(e){return e+1})),ua([d],"coral"),oa(d,i)}}},solveEnabled:t,newGame:ca,startOver:function(){var e=function(e){var a,t=[];return a={id:15,str:";;;;2;;;7;;;;;;3;4;;;;3;5;8;;;;;;;5;;4;8;;;;;;;;;1;;;;8;9;;;2;;;;;;6;2;4;;;;;7;;;;9;;;;5;2;;;;;;;6;7;1;;;",difficulty:"medium"},t.push(a),a={id:1,str:"6;3;;;;;;;;7;;4;;;5;;;;;1;5;;4;;;;6;5;;7;;;8;;;;;8;;;2;;;1;;;;;5;;;3;;7;4;;;;6;;1;7;;;;;9;;;2;;5;;;;;;;;4;3;",difficulty:"medium"},t.push(a),a={id:3,str:";8;3;;;2;;1;;;;;;3;;;;4;;2;7;;;;;;8;;;5;;7;;;3;;;;;5;8;6;;;;;6;;;4;;1;;;9;;;;;;5;7;;3;;;;1;;;;;;7;;6;;;4;9;;",difficulty:"medium"},t.push(a),a={id:4,str:";;6;;;5;;;;1;9;;;;;;;;;;7;;1;2;;4;;3;7;;;9;1;;5;;8;;;;;;;;1;;1;;7;5;;;6;3;;4;;1;7;;6;;;;;;;;;;1;9;;;;5;;;8;;;",difficulty:"hard"},t.push(a),a={id:6,str:"9;8;1;;;6;4;5;;;;;4;;;1;;7;;;;;;;;;;;;;;2;;;4;;1;;9;;;;2;;3;;3;;;1;;;;;;;;;;;7;;;6;;3;;;5;;;;;1;8;9;;;5;2;6;",difficulty:"hard"},t.push(a),a={id:2,str:";;;;2;3;;;;;5;6;;;4;;1;2;;3;7;;;;;;5;;;2;;;;;6;;1;8;;;;;;9;7;;9;;;;;2;;;4;;;;;;8;3;;7;2;;3;;;6;5;;;;;6;9;;;;;",difficulty:"easy"},t.push(a),a={id:7,str:";9;6;;4;;;3;;;5;7;8;2;;;;;1;;;9;;;5;;;;;9;;1;;;;8;5;;;;;;;;2;4;;;;9;;6;;;;;4;;;3;;;1;;;;;7;9;2;6;;;2;;;5;;9;8;;",difficulty:"medium"},t.push(a),a={id:5,str:"4;;;;9;;;7;;;;;2;;6;9;;;;;;;;7;;;2;3;8;;9;;;;;1;;2;4;;;;6;3;;9;;;;;3;;5;4;8;;;4;;;;;;;;1;6;;8;;;;;9;;;7;;;;5;",difficulty:"easy"},t.push(a),a={id:8,str:";;7;;;;9;;8;;3;;1;7;;;;4;;;;;;6;;;;6;9;8;7;4;;3;;;;;3;;1;;4;;;;;1;;3;9;7;6;2;;;;4;;;;;;9;;;;5;1;;4;;4;;5;;;;1;;;",difficulty:"medium"},t.push(a),a={id:9,str:";;;;;9;;;6;;;;;;3;8;5;1;;6;2;;1;5;;;;;;7;;;;;6;;;2;1;9;7;6;3;8;;;3;;;;;1;;;;;;4;5;;9;7;;2;5;8;6;;;;;;4;;;3;;;;;;",difficulty:"easy"},t.push(a),a={id:10,str:"2;9;;;7;4;;;;;1;;;;;4;;;6;7;;9;;5;;;;;8;;2;;6;;;;;6;;8;4;7;;2;;;;;5;;1;;8;;;;;7;;8;;9;2;;;6;;;;;1;;;;;4;1;;;5;8;",difficulty:"easy"},t.push(a),y.a.filter(t,{id:e})}(Ve)[0].str.split(";");e.pop(),Q(e),ia(),va(!1)},startOverEnabled:ba,markThisCell:function(){if(null!==Ne){var e=Ne,a=Object(i.a)(U),t=B(e);"bg-white"===a[t]?a[t]="bg-red":a[t]="bg-white",Y(a)}else console.log("id selected is null")},markThisCellEnabled:Xe,showAlert:function(){Object(o.confirmAlert)({customUI:function(e){var a=e.onClose;return l.a.createElement("div",null,l.a.createElement("h1",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("b",null,"Choose Game By Difficulty")),l.a.createElement("div",{className:"difficulty-options"},l.a.createElement("button",{className:"button is-info",onClick:function(){fa("easy"),a()},style:{margin:"5px"}},"Easy"),l.a.createElement("button",{className:"button is-warning",onClick:function(){fa("medium"),a()},style:{margin:"5px"}},"Medium"),l.a.createElement("button",{className:"button is-success",onClick:function(){fa("hard"),a()},style:{margin:"5px"}},"Hard")),l.a.createElement("div",{className:"cancel-button",style:{display:"grid"}},l.a.createElement("button",{className:"button is-danger",onClick:a,style:{margin:"5px"}},"Cancel")))}})},saveGame:function(){var e=function(e){var a=[];return e.map((function(e){0===e.value?a.push(""):a.push(e.value.toString())})),a}(H(K));Ge({cells:e,gameId:ce,difficulty:te,emptyCells:pe,complexity:oe})},loadGame:function(){var e=Be.cells;Q(e),ia()},loadEnabled:Be,handleShowCandidatesClicked:function(){Na((function(e){return!e}))},showCandidates:Ca})),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column"},l.a.createElement(p,{handleChange:function(e){var a=e.target.id,t=e.target.value;if(t>0&&t<10||""===t)if(function(e,a,t){return A(e,a).indexOf(parseInt(t))>-1}(K,a,t))ba||va(!0),oa(a,t),sa((function(e){return[].concat(Object(i.a)(e),[t])}));else{var n=function(e,a,t){var n=parseInt(a[0]),l=parseInt(a[1]),s=G(n,l),c=[];return F(H(e),n,l,s).knownValuesObj.map((function(e){if(e.value===parseInt(t)){var a=e.row,n=e.column,l="".concat(a).concat(n);c.push(l)}})),c}(K,a,t);ua(n,"red")}else M.b.error("\u26a0 You inserted ".concat(t,". Please enter a number between 1-9."),{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},handleFocus:function(e){var a=e.target.id,t=e.target.value;we(a),a&&Ze(!0),$&&ma(a,"coral"),da(a,t)},cellValues:K,cellBackgroundColors:U}),l.a.createElement(q,{highlightCells:$,setHighlightCells:_})),l.a.createElement("div",{className:"column"},l.a.createElement(h,{gameId:ce,gameDifficulty:te,complexity:oe,numberOfEmptyCells:pe})),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement(b,{consoleMessage:Ue,gamesWon:Re,showFound:function(){var e="".concat(la);Ye(e)},hintsUsed:u,showCandidates:Ca,candidates:je})))))))),l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"content has-text-centered"},l.a.createElement("p",null,"Sudoku - ",l.a.createElement("b",null,"Enrique Sotomayor")," - 2020")))))};c.a.render(l.a.createElement(U,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8c5a7a20.chunk.js.map