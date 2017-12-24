
export function update(text) {
  return dispatch => {
    // console.log('发布了redux');
    dispatch({ type: 'UPDATE', text })
  }
}
