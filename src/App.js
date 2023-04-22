import React, {  useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import $ from 'jquery'
import NasaApiCall from './services/NasaApiCall'
import Game from './components/Game'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import './App.css';
import Header from './containers/Header'
import MainContainer from './containers/MainContainer'

export default function App() {
  const [images, setImages] = useState([]);

  const fetchImages = (query = "") => {
    NasaApiCall(query)
    .then(items => {
      setImages(items)
    })
    .catch(error => {
      console.error(error);
    });
  }

  //the welcome component has the header/navbar and the button to choose to search is toggled
  return(
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/game" component={Game} />
        <Route
          path="/search"
          render={(props) => <SearchForm {...props} fetchImages={fetchImages} />}
        />
        <Route
          path="/search"
          render={(props) => <SearchResults {...props} getResults={images} />}
        />
      </div>
    </BrowserRouter>
  )
}
