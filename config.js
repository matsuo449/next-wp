import WPAPI from 'wpapi'

let wpUrl = 'http://3.92.3.206/wp-json';

const Config = {
  apiUrl: wpUrl,
};

//著者名
export const author = `${wpUrl}/wp/v2/posts?_embed`

export const wp = new WPAPI({ endpoint: Config.apiUrl });
