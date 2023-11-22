// zadanie 6

const filterBook = (list) => list.filter((book) => book.genre.endsWith("y") && book.pages % 2 == 0);
const sumLetters = (book) => book.reduce((totalLetters, book) => totalLetters + book.title.replace(/\s/g, '').length, 0);
const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
const result = compose(filterBook, sumLetters);

console.log("ilosc stron przefiltrowanych ksiazek: ", result(books));

// zadanie 7

const filterReating = (books) => books.filter((book) => book.rating > 5);
const filterPages = (books) => books.filter((book) => book.pages % 2 == 1);
const filterNumber = (books) => books.filter((book) => /\d+/.test(book.title));
const countBooks = (books) => books.length;
const compose2 = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
const result2 = compose2(filterPages, filterNumber, filterReating, countBooks);

console.log(result2("ilosc ksiazek:", books));

// zadanie 8

const sortletters = (list) => list.sort((a, b) => b.title.length - a.title.length);
const mapping= (list) => list.map(({title}) => title);
const compose3 = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
let result3 = compose3(sortletters, mapping);

console.log("druga ksiazka ktora ma najwiecej znakow w tytule: ", result3(books)[1]);