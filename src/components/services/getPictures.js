import axios from 'axios';

const BASE_URL = "https://pixabay.com/api";
const KEY = "36946759-7e5fc12dbc6128b490595b505";

async function getPictures(searchQuery, page) {
  const options = {
    params: {
      key: KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 12,
    },
  };
	  
	try {
		const response = await axios.get(BASE_URL, options);
		return response.data;
	} catch (error) {
		
	}

};

export default getPictures;
