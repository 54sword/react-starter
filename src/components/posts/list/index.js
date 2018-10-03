import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadPostsList } from '../../../actions/posts';
import { getPostsListByListId } from '../../../reducers/posts';

// import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class PostsList extends React.Component {

  static propTypes = {
    // 要获取的列表的id
    id: PropTypes.string.isRequired,
    // 筛选条件
    filter: PropTypes.object.isRequired,

    // 列表数据
    list: PropTypes.object.isRequired,
    // 加载列表的方法
    loadPostsList: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

    const { id, filter, list, loadPostsList } = this.props

    if (!list.data) {
      this.props.loadPostsList({
        id,
        filter
      })
    }

  }

  render() {

    const { list } = this.props
    const { loading, data } = list

    return(<div>
      {loading ? <div>loading...</div> : null}
      <div className="list-group">
        {data && data.map(item=>(
          <Link key={item._id}
            to={`/posts/${item._id}`}
            className="list-group-item list-group-item-action flex-column align-items-start">
            <p className="mb-1">
              <img src={item.user_id.avatar_url} className={styles.avatar} />
              {item.user_id.nickname}
            </p>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{item.title}</h5>
              <small>{item.topic_id.name}</small>
            </div>
            <p className="mb-1">{item.content_summary}</p>
            <small>{item.comment_count > 0 ? `有${item.comment_count}人评论` : null}</small>
          </Link>
        ))}
      </div>
    </div>)
  }

}

// PostsList = CSSModules(PostsList, styles);

const mapStateToProps = (state, props) => {
  return {
    list: getPostsListByListId(state, props.id)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    loadPostsList: bindActionCreators(loadPostsList, dispatch)
  }
}

PostsList = connect(mapStateToProps,mapDispatchToProps)(PostsList);

export default PostsList;
