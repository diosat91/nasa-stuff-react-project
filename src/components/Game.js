import React, { useState, useEffect, useCallback } from 'react';
import $ from 'jquery'

import PlayAgain from './PlayAgain'
import NasaApiCall from '../services/NasaApiCall'

export default function Game() {
  const getGameImage = useCallback(async () => {
    const spaceSearch = ["moon", "earth", "jupiter", "saturn", "pluto", "mars", "venus"]
    let randomSearchItem = spaceSearch[Math.floor(Math.random()*spaceSearch.length)]
    let randomNumber = Math.floor(Math.random() * 100) + 1

    // limit wont work here because results are always the same
    NasaApiCall(randomSearchItem)
    .then(items => {
      setImage(items[randomNumber].links[0].href)
      setItem(randomSearchItem)
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    getGameImage();
  }, [getGameImage]);

  const [image, setImage] = useState("")
  const [item, setItem] = useState("")
  const [gamePlayed, setGamePlayed] = useState(false)

  const playGame = () => {
    const spaceWords = ["moon", "earth", "jupiter", "saturn", "pluto", "mars", "venus"]
    return spaceWords.map(word =>
      <div className="guessing">
        <button onClick={e => guessChoice(e)} id={word}>{word}</button>
      </div>
    )
  }

  const guessChoice = (e) => {
    setGamePlayed(true)

    if (item === e.target.id) {
      $(".namegamebutton").html("You're Right!")
    } else {
      $(".namegamebutton").html("Wrong, Try Again. Correct Answer: " + item)
    }
  }

  const renderGame = () => {
    return <div className="namegamebutton">{playGame()}</div>
  }

  return (
    <div className="namegame" >
      <div className="titlegame">Guess which one is associated with this image:</div>
      <img src={image} id="namegameimage" />
      {renderGame()}
      {gamePlayed ? <PlayAgain /> : null}
    </div>
  )
}

