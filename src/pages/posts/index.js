import React from 'react'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { update } from '../../actions/account'
// import { getAccessToken } from '../../reducers/account'

import CSSModules from 'react-css-modules'
import styles from './style.scss'

import Shell from '../shell'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)


export default () => {
  return (  <div>
      <h3>22222</h3>
    </div>)
}

// 纯组件
export class Posts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.props.update('ttt')
    // console.log(this.props.location.params);
  }

  render() {
    return(<div>

      <div>

      <div>
        <h2 styleName="h2">Posts111</h2>
        {/*
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>
              Components
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
        */}
      </div>


      </div>
    </div>)
  }

}

Posts = CSSModules(Posts, styles)

Posts.propTypes = {
  update: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: bindActionCreators(update, dispatch)
  }
}

Posts = connect(mapStateToProps,mapDispatchToProps)(Posts)

// export default Shell(Posts)
