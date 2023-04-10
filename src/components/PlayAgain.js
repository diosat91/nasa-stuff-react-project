import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayAgain () {
  const reloadPage = () => {
    document.location.reload(true)
  }

  return (
    <div className="playagainbutton">
      <button onClick={reloadPage}>Again!</button>
      <Link to="/"><button className="back">Go Back</button></Link>
    </div>
  );
}

