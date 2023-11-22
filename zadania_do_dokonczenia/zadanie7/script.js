// Stwórz kompozycję która na tablicy „books” zlicza ilość pozytywnych ocen (rating > 5), gdzie
// strony (pages) są liczbą nieparzystą oraz tytuł (title) zawiera liczbę.

const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];

const filterReating = (books) => books.filter((book) => book.rating > 5);
const filterPages = (books) => books.filter((book) => book.pages % 2 == 1);
const filterNumber = (books) => books.filter((book) => /\d+/.test(book.title));
const countBooks = (books) => books.length;
const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
const result = compose(filterPages, filterNumber, filterReating, countBooks);

console.log(result("ilosc ksiazek:", books));