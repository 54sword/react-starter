import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadPostsList } from '../../store/actions/posts'
import { getPostsListByListId } from '../../store/reducers/posts'

import Shell from '../../components/shell'
import Meta from '../../components/meta'
import Loading from '../../components/ui/loading'

@Shell
@connect(
  (state, props) => ({
    list: getPostsListByListId(state, props.match.params.id)
  }),
  dispatch => ({
    loadPostsList: bindActionCreators(loadPostsList, dispatch)
  })
)
export default class PostsDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notFoundPgae: false
    }
  }

  componentWillMount() {
    // 服务端渲染，404内容显示处理
    const { list, notFoundPgae } = this.props
    if (list && list.data && !list.data[0]) {
      this.state.notFoundPgae = true
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const { list, loadPostsList } = this.props

    if (!list || !list.data) {
      await this.props.loadPostsList({
        id,
        filter: {
          _id: id
        }
      })

      // this.componentWillMount();
    }
  }

  render() {
    const { list } = this.props
    const { loading, data } = list || {}
    const posts = data && data[0] ? data[0] : null
    const { notFoundPgae } = this.state

    // 404 处理
    if (notFoundPgae) {
      return '404 Not Found'
    }

    return (
      <div>
        {loading ? <Loading /> : null}

        <Meta title={posts ? posts.title : '加载中...'} />

        {posts ? (
          <div className="jumbotron">
            <h1 className="display-4">{posts.title}</h1>
            <p className="lead">{posts.topic_id.name}</p>
            <hr className="my-4" />
            {posts.content_html ? <div dangerouslySetInnerHTML={{ __html: posts.content_html }} /> : null}
          </div>
        ) : null}
      </div>
    )
  }
}
