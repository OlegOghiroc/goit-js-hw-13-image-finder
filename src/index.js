import FetchIpi from './js/apiService';

const REFS = {

}

const photosFetch = new FetchIpi();
console.log(photosFetch)
const name = 'flower';
photosFetch.getFetch(name);
// 1 добавити фнк слухача
// 2 рендерити розмітку
// 3 load more