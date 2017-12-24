import React from 'react'
import { Link } from 'react-router-dom'

export class Head extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(<ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>)
  }

}

export default Head
