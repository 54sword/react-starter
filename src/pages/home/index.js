import React from 'react';
import PropTypes from 'prop-types';
import { loadPostsList } from '../../actions/posts';

// http://blog.csdn.net/ISaiSai/article/details/78094556
import { withRouter } from 'react-router-dom';

// 壳组件
import Shell from '../../components/shell';
import Meta from '../../components/meta';
import PostsList from '../../components/posts/list';

@Shell
@withRouter
export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(<div>

      <Meta title="首页" />

      <PostsList
        id={'home'}
        filter={{
          sort_by: "create_at",
          deleted: false,
          weaken: false
        }}
        />
    </div>)
  }
}
