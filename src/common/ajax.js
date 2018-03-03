
import config from '../../config';
import axios from 'axios';

const AJAX = ({ url = '', method = 'get', data = {}, headers = {} }) => {

  let option = { url, method, headers }

  if (method == 'get') {
    data._t = new Date().getTime();
    option.params = data;
  } else if (method == 'post') {
    option.data = data;
  }

  return axios(option).then(resp => {
    if (resp && resp.data) {
      let res = resp.data;
      return [null, res];
    } else {
      return ['return none'];
    }
  })
  .catch(function (error) {
    if (error && error.response && error.response.data) {
      return [error.response.data];
    } else {
      return ['return error'];
    }
  })

}

export default AJAX;
