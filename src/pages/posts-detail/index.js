import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadPostsList } from '../../actions/posts';
import { getPostsListByListId } from '../../reducers/posts';

import Shell from '../../components/shell';
import Meta from '../../components/meta';

export class PostsDetail extends React.Component {

  // 服务端渲染
  // 加载需要在服务端渲染的数据
  static loadData({ store, match, userinfo }) {
    return new Promise(async function (resolve, reject) {

      const { id } = match.params;

      const [ err, data ] = await loadPostsList({
        id: id,
        filter: {
          _id: id,
          deleted: false,
          weaken: false
        }
      })(store.dispatch, store.getState);

      // 没有找到帖子，设置页面 http code 为404
      if (err || data.length == 0) {
        resolve({ code:404 });
      } else {
        resolve({ code:200 });
      }

    })
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    const { id } = this.props.match.params;
    const { list, loadPostsList } = this.props;

    if (!list || !list.data) {
      this.props.loadPostsList({
        id,
        filter: {
          _id: id
        }
      })
    }

  }

  render() {

    const { list } = this.props;
    const { loading, data } = list || {};
    const posts = data && data[0] ? data[0] : null;

    // 404 处理
    if (data && data.length == 0) {
      return '404 Not Found';
    }

    return(<div>

      {loading ? <div>loading...</div> : null}

      <Meta title={posts ? posts.title : '加载中...'} />

      {posts ?
        <div className="jumbotron">
          <h1 className="display-4">{posts.title}</h1>
          <p className="lead">{posts.topic_id.name}</p>
          <hr className="my-4" />
          {posts.content_html ?
            <div dangerouslySetInnerHTML={{__html:posts.content_html}} />
            : null}
        </div>
        : null}

    </div>)
  }

}

const mapStateToProps = (state, props) => {
  const { id } = props.match.params;
  return {
    list: getPostsListByListId(state, id)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    loadPostsList: bindActionCreators(loadPostsList, dispatch)
  }
}

PostsDetail = connect(mapStateToProps,mapDispatchToProps)(PostsDetail);

export default Shell(PostsDetail);
