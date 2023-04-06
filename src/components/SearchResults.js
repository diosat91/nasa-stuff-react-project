import React from 'react';
import moon from './../images/moon.jpg'

function SearchResults(props) {
  //this function helps when presenting the cards - if the title and description are the same, it doesn't show the description
  const sameContent = (a, b) => {
    if (a === b) {
      return null
    } else {
      return b
    }
  }

  // This function determines if an image is present in the object and if not, renders a default image
  const hasImage = (result) => {
    if (typeof result !== 'undefined') {
      return result[0].href
    } else {
      return moon
    }
  }

  const hasContent = (result) => {
    if (typeof result !== 'undefined') {
      return result[0].title
    } else {
      return "No content"
    }
  }

  const noResults = () => {
    return <div className="noresult">no results yet</div>
  }

  // This determines the HTML to render and the card structure, mapping the images from the state onto each card
  const getResults = () => {
    if (props.getResults.length > 0) {
      return props.getResults.map(image =>
        <div className="cardborder">
          <div className="leftbox">
            <div className="image"><img src={hasImage(image.links)} alt="" /></div>
          </div>
          <div className="rightbox">
            <div className="title">{hasContent(image.data)}</div>
          </div>
          <div className="clearfix">
            <div className="bottombox">
              <div className="desc">
                {sameContent(image.data[0].title, image.data[0].description)}
              </div>
            </div>
          </div>
          <div className="creator">
            {image.data[0].secondary_creator}
          </div>
        </div>
      )
    } else {
      return noResults()
    }
  }

  //The Search field is rendered and the results are presented.
  return (
    <div className="searchstuff">
      {getResults()}
    </div>
  )
}

export default SearchResults
