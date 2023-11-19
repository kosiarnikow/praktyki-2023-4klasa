const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},  // to jest, wiec trzeba zapisac
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4}, // to nie
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2}, // to jest, wiec trzeba zapisac
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9}, // to nie
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8}, // to nie
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1}, // to nie
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5}, // to nie
];

const titleLetters = books.filter((book) => book.pages % 2 === 0 && book.genre.endsWith('y'))
    .reduce((current, book) => {
        const title = book.title.replace(/\s/g, '');
        current[title] = title.length;
        return current;
    }, {});

console.log(titleLetters);