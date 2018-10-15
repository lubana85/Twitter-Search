import axios from 'axios';

const apiRequest = (method, url, requestBody = null, cb = null) => {

  /* const headers = {
    'authorization': 'OAuth ' +
    'oauth_consumer_key="CdVyA8ssLTxUpoa0XoZ647fsE",' +
    'oauth_token="110084045-DuJ34uTK5BHEWP22foEoYP7RzaKLTRD5yiDyzcDT",' +
    'oauth_signature_method="HMAC-SHA1",' +
    'oauth_timestamp="1539561725",' +
    'oauth_nonce="aGzqTk",' +
    'oauth_version="1.0",' +
    'oauth_signature="5RDEyxI/WO4xG5gvfTmXYGdgS20="'
  };*/

    const headers = {
      'authorization':
            'OAuth oauth_consumer_key="CdVyA8ssLTxUpoa0XoZ647fsE",oauth_nonce="wytiBE", oauth_signature="5RDEyxI/WO4xG5gvfTmXYGdgS20=",oauth_signature_method="HMAC-SHA1", oauth_timestamp="1539561725",oauth_token="DuJ34uTK5BHEWP22foEoYP7RzaKLTRD5yiDyzcDT", oauth_version="1.0"'};

  return axios({
    method,
    url,
    data: '',
    headers,
  }).then(res => {
    if (cb) cb(res);
    return res;
  });
};

export default apiRequest;
