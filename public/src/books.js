// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.filter(author => author.id === id)[0];
}

function findBookById(books, id) {
  return books.filter(book => book.id === id)[0];
}

function partitionBooksByBorrowedStatus(books) {
  const returnedBooks = [];
  const notReturnedBooks = [];

  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    if (book.borrows.every(returnedBook => returnedBook.returned)) returnedBooks.push(book);
    else notReturnedBooks.push(book);
  }

  return [notReturnedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  const bookBorrowIds = book.borrows.map(obj => obj = obj.id);
  const addReturnedProperty = accounts.map(account => {
    book.borrows.forEach(obj => {
      if (account.id === obj.id) account = {...account, 'returned': obj.returned};
    })
    return account;
  })

  return addReturnedProperty.filter(account => bookBorrowIds.includes(account.id));
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
