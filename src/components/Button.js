import React from 'react';

export default function Button(props) {
  return (
    <div className="buttoncontainer">
      <button>{props.type}</button>
    </div>
  )
}
