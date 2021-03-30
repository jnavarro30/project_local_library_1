// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter(book => book.borrows.some(obj => !obj.returned)).length;
}

function getMostCommonGenres(books) {
  const genres = [...new Set(books.map(book => book.genre))];
  const commonGenres = genres.map(genre => genre = { name: genre, count: 0});

  for (let i = 0; i < books.length; i++) {
    const { genre } = books[i];

    for (let j = 0; j < commonGenres.length; j++) {
      let { name, count } = commonGenres[j];
      
      if (name === genre) commonGenres[j].count = count + 1;
    }
  }

  return commonGenres.sort((a, b) => b.count - a.count).slice(0, 5);
}

function getMostPopularBooks(books) {
  const titles = books.map(book => book = { name: book.title, count: book.borrows.length});
  
  return titles.sort((a, b) => b.count - a.count).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  // condense book array and sort
  const authorCount = books.reduce( (acc, book) => {
      const authorId = book.authorId;
      if( acc[authorId] ){
        acc[authorId] += book.borrows.length;
      }
      else{
        acc[authorId] = book.borrows.length;
      }
      return acc;
    }, {});
  
   const popularAuthors = [];
  
   for( let key in authorCount ){
     const authorInfo = authors.find( (author) => author.id == key )
     const formatAuthor = {
       name : `${authorInfo.name.first} ${authorInfo.name.last}`,
       count : authorCount[key]
     };
     popularAuthors.push( formatAuthor );
   }
  
  popularAuthors.sort( (a,b) => b.count - a.count);
  return popularAuthors.splice(0,5);
  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
