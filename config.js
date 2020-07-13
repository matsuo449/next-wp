import WPAPI from 'wpapi'

let wpUrl = 'http://3.92.3.206/wp-json';

const Config = {
  apiUrl: wpUrl,
};

const wp = new WPAPI({ endpoint: Config.apiUrl });

export default wp;
