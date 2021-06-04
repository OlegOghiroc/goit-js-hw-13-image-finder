import FetchIpi from './js/apiService';
import imageCard from './thamplates/imageCard.hbs';
const photosFetch = new FetchIpi();

const refs = {
    formInput: document.querySelector('.search-form'),
    cardList: document.querySelector('.gallery')
}
refs.formInput.addEventListener('submit', onInputSearch)




async function onInputSearch(e) {
    e.preventDefault()
    photosFetch.query = e.currentTarget.elements.query.value;
    console.log(photosFetch.query)
    const result = await photosFetch.getFetch(photosFetch.inputSearchValue)
    renderMarkap(result)
}

function renderMarkap(hits) {
    refs.cardList.insertAdjacentHTML('beforeend', imageCard(hits))
}

// 1 добавити фнк слухача
// 2 рендерити розмітку
// 3 load more