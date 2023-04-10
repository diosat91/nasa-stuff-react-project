import React, { useState, useEffect, useCallback } from 'react';
import $ from 'jquery'

import PlayAgain from './PlayAgain'

export default function Game() {
  useEffect(() => {
    getGameImage();
  }, [getGameImage]);

  const getGameImage = useCallback(async () => {
    const spaceSearch = ["moon", "earth", "jupiter", "saturn", "pluto", "mars", "venus"]
    let randomSearchItem = spaceSearch[Math.floor(Math.random()*spaceSearch.length)];
    let oneHundred = [];
    for (let i = 0; i <= 100; i++) {
      oneHundred.push(i);
    }
    let randomNumber = oneHundred[Math.floor(Math.random()*oneHundred.length)]

    const url = "https://images-api.nasa.gov/search?q="

    $.ajax({
      url: url + randomSearchItem,
      type: "GET",
      dataType : "json",
    }).then(json => {
      setImage(json.collection.items[randomNumber].links[0].href)
      setItem(randomSearchItem)
    })
  }, []);

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

