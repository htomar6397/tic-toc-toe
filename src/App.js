import logo from './logo.svg';
import './App.css';
import{ HiXMark } from 'react-icons/hi2'
import { TbOval } from 'react-icons/tb'
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import beep1 from './ping-82822.mp3'
import beep2 from './start-13691.mp3'
import beep3 from './board-start-38127.mp3'
import beep4 from './winn.mp3'

function App() {
  const [play1]=useSound(beep1);
  const [play3]=useSound(beep3);
  const [play2]=useSound(beep2);
  const [play4]=useSound(beep4);
  const [symbol0,setSymbol0]= useState("");
  const [symbol1,setSymbol1]= useState("");
  const [symbol2,setSymbol2]= useState("");
  const [symbol3,setSymbol3]= useState("");
  const [symbol4,setSymbol4]= useState("");
  const [symbol5,setSymbol5]= useState("");
  const [symbol6,setSymbol6]= useState("");
  const [symbol7,setSymbol7]= useState("");
  const [symbol8,setSymbol8]= useState("");
  const [ssymbol0,setSsymbol0]= useState("roww");
  const [ssymbol1,setSsymbol1]= useState("roww");
  const [ssymbol2,setSsymbol2]= useState("roww");
  const [ssymbol3,setSsymbol3]= useState("roww");
  const [ssymbol4,setSsymbol4]= useState("roww");
  const [ssymbol5,setSsymbol5]= useState("roww");
  const [ssymbol6,setSsymbol6]= useState("roww");
  const [ssymbol7,setSsymbol7]= useState("roww");
  const [ssymbol8,setSsymbol8]= useState("roww");
  const [turn,setTurn]= useState("X");
  const [won,setWon]= useState("");
  const [game,setGame]= useState("0");
  const [click,setClick]= useState("not clicked");
  const [x,setX]= useState(0);
  const [y,setY]= useState(0);
  var bn=0;

  const reset=(e)=>{
    setSymbol0("");
    setSymbol1("");
    setSymbol3("");
    setSymbol4("");
  setSymbol2("");
  setSymbol5("");
    setSymbol6("");
    setSymbol7("");
    setSymbol8("");
    setSsymbol0("roww");
    setSsymbol1("roww");
    setSsymbol3("roww");
    setSsymbol4("roww");
    setSsymbol2("roww");
    setSsymbol5("roww");
    setSsymbol6("roww");
    setSsymbol7("roww");
    setSsymbol8("roww");
    setTurn("X");
    setWon("X turn");
    setGame("0");
    play3();
    if(e===0) { setX(0);
    setY(0);}
    
  }
  function setValue(e){
    console.log("valve of e:",e);
    switch (e){
      case 0: symbol0===""?setSymbol0(turn):bn=e; break;
      case 1: symbol1===""?setSymbol1(turn):bn=e; break;
      case 2: symbol2===""?setSymbol2(turn):bn=e; break;
      case 3: symbol3===""?setSymbol3(turn):bn=e; break;
      case 4: symbol4===""?setSymbol4(turn):bn=e; break;
      case 5: symbol5===""?setSymbol5(turn):bn=e; break;
      case 6: symbol6===""?setSymbol6(turn):bn=e; break;
      case 7: symbol7===""?setSymbol7(turn):bn=e; break;
      case 8: symbol8===""?setSymbol8(turn):bn=e; break;
      default: break;

     
      }
      
      // console.log("turn is gg",turn);
      console.log("bn",bn);
  }
  function handleClick(e) {
    // if(turn==="X")play2();;
 setValue(e);
  console.log(game);
//   console.log("turn is",turn);
if(bn!==e) bn=0;
console.log("bn in main",bn);
  
    
    if(turn==="X"&&bn===0) setTurn("O");
    if(turn==="O"&&bn===0) setTurn("X");
     
 
  }
  useEffect(() => { 
    checkWin();
     console.log("I Only run once (When the component gets mounted)") 
     
     }, [turn]);
  
  
  
  // function setTune(){
  //   console.log("turn is ...",turn);
  //   console.log(click);
  // turn==="X"&&click==="not clicked"?setTurn("O"):setTurn("X");
  // setClick("0");
  
  // console.log("turn is",turn);
  // console.log(click);

  //                 }

      const checkWin=()=>{  
        
      // console.log(click);
        if((symbol0===symbol1)&&(symbol1===symbol2)&&(symbol0!==""))  { setWon(symbol0 + " is win.."); setSsymbol0("rowww"); setSsymbol1("rowww"); setSsymbol2("rowww");     play4(); setGame("winnn"); symbol2==="X"?setX(x+1):setY(y+1); }
        else if  ((symbol3===symbol4)&&(symbol4===symbol5)&&(symbol5!=="")){ setWon(symbol5 + " is win.."); setSsymbol3("rowww"); setSsymbol4("rowww"); setSsymbol5("rowww");play4(); setGame("winnn"); symbol5==="X"?setX(x+1):setY(y+1);}
        else if ((symbol6===symbol7)&&(symbol7===symbol8)&&(symbol8!=="")){ setWon(symbol8 + " is win.."); setSsymbol6("rowww"); setSsymbol7("rowww"); setSsymbol8("rowww"); play4(); setGame("winnn"); symbol8==="X"?setX(x+1):setY(y+1);}
        else if ((symbol0===symbol3)&&(symbol3===symbol6)&&(symbol0!=="")) {setWon(symbol0 + " is win.."); setSsymbol0("rowww"); setSsymbol3("rowww"); setSsymbol6("rowww"); play4(); setGame("winnn"); symbol6==="X"?setX(x+1):setY(y+1); }
        else if ((symbol1===symbol4)&&(symbol4===symbol7)&&(symbol7!=="")){ setWon(symbol7 + " is win.."); setSsymbol1("rowww"); setSsymbol4("rowww"); setSsymbol7("rowww"); play4(); setGame("winnn"); symbol7==="X"?setX(x+1):setY(y+1);}
        else if ((symbol2===symbol5)&&(symbol5===symbol8)&&(symbol8!=="")){ setWon(symbol8 + " is win.."); setSsymbol2("rowww"); setSsymbol5("rowww"); setSsymbol8("rowww"); play4(); setGame("winnn"); symbol8==="X"?setX(x+1):setY(y+1);}
        else if ((symbol0===symbol4)&&(symbol4===symbol8)&&(symbol8!=="")) {setWon(symbol8 + " is win.."); setSsymbol0("rowww"); setSsymbol4("rowww"); setSsymbol8("rowww"); play4(); setGame("winnn"); symbol8==="X"?setX(x+1):setY(y+1); }
        else if ((symbol2===symbol4)&&(symbol4===symbol6)&&(symbol6!=="")){ setWon(symbol6 + " is win.."); setSsymbol2("rowww"); setSsymbol4("rowww"); setSsymbol6("rowww"); play4(); setGame("winnn"); symbol6==="X"?setX(x+1):setY(y+1);}
        else setWon(turn+" turn");
      }  
         const q="1";
      
             

  return (
    <>
    <nav className="navbar">
      <span>TICTACTOE.COM</span>
    </nav>
    
    <div className="container">
      <div className="game">
    <div className="row">
      <div className={ssymbol0}  onClick={()=>{ game==="0"?handleClick(0):reset();play2(); }}
      
      >{symbol0}
      </div>
      <div className={ssymbol1}  onClick={()=>{game==="0"?handleClick(1):reset();play2();; }}
      >{symbol1}</div>
      <div className={ssymbol2} onClick={()=>{game==="0"?handleClick(2):reset();play2();; }}
      >  {symbol2}</div></div>
    <div className="row"><div className={ssymbol3}  onClick={()=>{game==="0"?handleClick(3):reset(); play2();
    }}
      >{symbol3}</div><div className={ssymbol4}  onClick={()=>{game==="0"?handleClick(4):reset();play2();; }}
      >{symbol4}</div><div className={ssymbol5} onClick={()=>{game==="0"?handleClick(5):reset();play2();; }}
      >{symbol5}</div></div>
    <div className="row"><div className={ssymbol6}  onClick={()=>{game==="0"?handleClick(6):reset();play2();; }}
      >{symbol6}</div><div className={ssymbol7} onClick={()=>{game==="0"?handleClick(7):reset();play2();; }}
      >{symbol7}</div><div className={ssymbol8}  onClick={()=>{game==="0"?handleClick(8):reset();play2();; }}
      >{symbol8}</div></div>
      </div>
      <div className='info'>
      <button onClick={()=>{reset(1)}}>New Game</button>
      <button id="reset" onClick={()=>{reset(0)}}>Reset</button>
    <p className={game}>{won}</p>
   <div className="iop"> <span>X : {x}</span>
    <span>O : {y}</span></div>
      </div>
    </div>
    </>
  );
}

export default App;
