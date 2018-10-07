import { loadPostsList } from '../../actions/posts';

export default ({ store, match }) => {
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
