const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7}, 
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4}, 
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2}, 
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9}, 
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8}, // to jest, wiec trzeba zapisac
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5}, 
];

const getSecondLongestTitle = (books) => {
    const sortedTitles = books
      .map((book) => book.title)
      .sort((a, b) => b.length - a.length);
    return sortedTitles[1];
  };
  
  const secondLongestTitle = getSecondLongestTitle(books);
  
  console.log(`Second longest title: ${secondLongestTitle}`);