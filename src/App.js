import {Overview} from './components/overview';
import React, {useEffect, useState} from "react";
import './App.css';
import { Tiles } from './components/tiles';
import {Loading} from './components/loading';
import {GameOver} from './components/gameover';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [tiles, setTiles] = useState([]);
  const [lastTile, setLastTile] = useState(0);
  const [tileAmount, setTileAmount] = useState(4);
  const [loading, setLoading] = useState(true);
  const [spliceTile, setSpliceTile] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [clickCount, setClickCount] = useState(4);
  const [levelChange, setLevelChange] = useState(false);

  const eachTile = (tile) => {
   fetch(tile.url)
   .then((response) => response.json())
   .then((data) => {setTiles((tiles) => tiles.concat(data))})
  }
 
useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((response) => response.json())
    .then((data) => (data.results.forEach(eachTile)))   
  
},[])
useEffect(() =>{
  if(tiles.length > 5){
    setSpliceTile(() => tiles.slice(lastTile, tileAmount))
  }
}, [tiles,lastTile, tileAmount])
useEffect(() =>{
  if(tiles.length > 100){
    setLoading(false)
  }
},[tiles])
useEffect(()=>{
  if(clickCount === 0){
    setLevel((l) => l + 1)
    setLastTile(() => tileAmount)
    setTileAmount((t) => t +  4 + level)
    setLevelChange(true)
    setLoading(true)
  
  }
}, [clickCount])
useEffect(() =>{
  if(levelChange === true){
    setTimeout(() => {
      setClickCount((c) => tileAmount - lastTile)
      setLevelChange(false);
      setLoading(false)
     
    }, 3000);
  }
})
useEffect(() =>{
  if(score > bestScore){
    setBestScore(score)
  }
},[score])
function click(e) {
 let currentIndex = spliceTile.length, randomIndex;
 let array = spliceTile;
 if(e.target.id === 'clicked'){
  setGameOver(true)
  setLoading(false)
 }

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];

  }
  e.target.setAttribute('id', 'clicked');
  setSpliceTile([...array]);
  setScore((score) => score + 1);
  setClickCount((c) => c - 1);
}

function restart(){
  setScore(0);
  setLevel(1);
  setLastTile(0);
  setTileAmount(4);
  setGameOver(false);
  setClickCount(4)
}
  if (loading){
    return (
      <Loading level={level}/>
    )
  }
  else if(gameOver){
    return (
      <GameOver restartBtn= {restart}/>
    )
  }
    return (
    <div className="App">
      <Overview score={score} bestScore={bestScore} level={level}/>
      <Tiles tiles ={tiles} lastTile={lastTile} tileAmount={tileAmount} spliceTile={spliceTile} shuffle={click} />
    </div>
  );
}

export default App;
