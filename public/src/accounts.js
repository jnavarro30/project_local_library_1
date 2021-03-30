// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.filter(account => account.id === id)[0];
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last < b.name.last ? -1 : 1);
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;

  for (let i = 0; i < books.length; i++) {
    let borrowsArray = books[i].borrows;

    borrowsArray.forEach(borrow => {
      if (borrow.id === account.id) total++;
    });
  }

  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  const possessedBooks = [];

    // create borrowed books array by account
    for (let i = 0; i < books.length; i++) {
      let book = books[i];
      let borrowsArray = book.borrows;
  
      borrowsArray.forEach(borrow => {
        if (borrow.id === account.id && !borrow.returned) possessedBooks.push(book); 
      });
    };

    // add author to each book in possessedBooks array
    possessedBooks.map(book => {
      authors.forEach(author => {
        if (book.authorId === author.id) book.author = author;
      });
    });

  return possessedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
