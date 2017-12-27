import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import CSSModules from 'react-css-modules'
import styles from './style.scss'

export class Head extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(<div styleName="head">
      <ul>
        <li styleName="ttt"><NavLink exact to="/">Home1333333</NavLink></li>
        <li><NavLink exact to="/posts">Posts</NavLink></li>
        <li><NavLink exact to="/topics">Topics</NavLink></li>
      </ul>
    </div>)
  }

}

Head = CSSModules(Head, styles)

export default Head
