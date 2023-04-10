import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button'

export default function MainContainer() {
  return(
    <div>
      <Link to="/search"><Button type='Search'></Button></Link>
      <Link to="/game"><Button type='Play'></Button></Link>
    </div>
  )
}
