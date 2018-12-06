import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import MetaTags, { ReactTitle } from 'react-meta-tags'

import { name } from '../../../config'

export default class Meta extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
  }

  render() {
    const { title } = this.props

    let _title = ''

    _title += title || name
    if (title) _title += ` - ${name}`

    return (
      <Fragment>
        <ReactTitle title={_title} />
        {this.props.children ? <MetaTags>{this.props.children}</MetaTags> : null}
      </Fragment>
    )
  }
}
