
import axios from 'axios';

const BASE_URL = `https://pixabay.com/api/`;
const apikey = `21924983-61906be40b003d99bb3c70dab`;

export default class FetchIpi {
    constructor() {
        this.key = apikey;
         this.inputSearchValue = '';
        
    }
    async getFetch() {
        const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.inputSearchValue}&page=2&per_page=12&key=${apikey}`;
        const response = await axios.get(url);

        console.log(response.data.hits)
        return response.data.hits;
    }
    get query() {
        return this.inputSearchValue
    }

    set query(newQuery) {
        this.inputSearchValue = newQuery  
    }
  
}