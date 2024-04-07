// To pass the tests, don't forget to return your fetch!
  //function renderBooks(books) {
  //const main = document.querySelector('main');
  //books.forEach(book => {
    //const h2 = document.createElement('h2');
    //h2.innerHTML = book.name;
    //main.appendChild(h2);
  //});
//}

//Function to fetch books from the API
function fetchBooks() {
  // Fetching data from the API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(data => {
      // Call renderBooks function with the fetched data
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

// Function to render books data
function renderBooks(booksData) {
  // Example usage:
  // 1. The 5th book in the series
  const fifthBook = booksData[4]; // Index is zero-based
  console.log('The 5th book:', fifthBook);

  // 2. The 1031st character in the series
  const allBooksCharacters = booksData.flatMap(book => book.characters);
  const thousandThirtyFirstCharacter = allBooksCharacters[1030];
  console.log('The 1031st character:', thousandThirtyFirstCharacter);

  // 3. The total number of pages of all the books
  const totalPages = booksData.reduce((total, book) => total + book.numberOfPages, 0);
  console.log('Total number of pages of all books:', totalPages);

  // You can do more with the booksData as needed
}

// Call fetchBooks function when index.html is loaded
fetchBooks();


// Exporting fetchBooks function to make it accessible for testing





