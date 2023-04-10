import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SearchForm(props) {
  const [query, setQuery] = useState("");

  const handleSubmit = event => {
    event.preventDefault()
    props.fetchImages(query)
  }

  const handleChange = event => {
    setQuery(event.target.value)
  }

  return (
    <div className="searchcontent">
      <h3 className="searchtext">Enter a Celestial Term:</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <Link to="/search" onClick={handleSubmit}><button id="searchformbutton">Submit</button></Link>
      </form>
    </div>
  )
}
