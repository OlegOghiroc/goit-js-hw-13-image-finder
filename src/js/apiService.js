
const BASE_URL = `https://pixabay.com/api/`;
const apikey = `21924983-61906be40b003d99bb3c70dab`;

export default class FetchIpi {
    constructor() {
        this.key = apikey;
    }
    getFetch(name) {
        const url =`${BASE_URL}?image_type=photo&orientation=horizontal&q=${name}&page=2&per_page=12&key=${apikey}`;
        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
        })
    }
}