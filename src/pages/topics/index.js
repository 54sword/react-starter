import React from 'react'
import { Route, Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { update } from '../../actions/account'

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )


// 纯组件
export class Topics extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.props.update('qqq')
  }

  render() {
    return(<div>

      <div>
        <h2>Topics</h2>
      </div>
    </div>)
  }

}

// Topics = CSSModules(Topics, styles)

Topics.propTypes = {
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

Topics = connect(mapStateToProps,mapDispatchToProps)(Topics)


export default Topics
