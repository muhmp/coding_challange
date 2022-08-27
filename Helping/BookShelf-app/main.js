document.addEventListener("DOMContentLoaded", function () {
    const submitBook = document.getElementById("inputBook");
    submitBook.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent
      addBookList();
    });
  }); 
  
  // FUNCTION ADDBOOKLIST
  function addBookList() {
    // variable nilai data
    const bookTitle = document.getElementById("inputBookTitle").value;
    const bookAuthor = document.getElementById("inputBookAuthor").value;
    const bookYear = document.getElementById("inputBookYear").value;
    // const bookIsComplete = document.getElementById("inputBookIsComplete").value;
  
    // generate id unik, buat objek baru, dan disimpan di aray books
    const generateID = generateId();
    const bookListObject = generateBookListObject(generateID, bookTitle, bookAuthor, bookYear, false);
    books.push(bookListObject);
  
    // render custom event
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
  
  // id unik
  function generateId() {
    return +new Date();
  }
  
  // objek baru
  function generateBookListObject(id, title, author, year, isCompleted) {
    return {
      id,
      title,
      author,
      year,
      isCompleted,
    };
  }
  
  // objek baru yg disimpan di array
  const books = [];
  
  // render event data complete menjadi incomplete dst
  const RENDER_EVENT = "render-book";
  
  // untuk menampilkan ke layar inputan dari booklist butuh objek DOM
  // FUNCTION makeBook
  function makeBook(bookListObject) {
    const textTitleBook = document.createElement("h3");
    textTitleBook.innerText = bookListObject.title;
  
    const textAuthorBook = document.createElement("p");
    textAuthorBook.innerText = bookListObject.author;
  
    const textYearBook = document.createElement("p");
    textYearBook.innerText = bookListObject.year;
  
    const textContainer = document.createElement("div");
    textContainer.classList.add("book_list");
    textContainer.append(textTitleBook, textAuthorBook, textYearBook);
  
    const container = document.createElement("div");
    container.classList.add("book_item");
    container.append(textContainer);
    container.setAttribute("id", `book-${bookListObject.id}`);
  
    // FUNCTION JIKA BUKU SUDAH DIBACA (SHELF SELESAI DIBACA)
    if (bookListObject.isCompleted) {
      const undoRead = document.createElement("button");
      undoRead.classList.add("green");
      // aksi biar button undoBaca dapat diklik/berfungsi
      undoRead.addEventListener("click", function () {
        undoBookFromCompleted(bookListObject.id);
      });
  
      // hapus buku
      const deleteBook = document.createElement("button");
      deleteBook.classList.add("red");
      deleteBook.addEventListener("click", function () {
        removeBookFromCompleted(bookListObject.id);
      });
      // container append button undo dan delete
      container.append(undoRead, deleteBook);
    } else {
      const doneRead = document.createElement("button");
      doneRead.classList.add("green");
      doneRead.addEventListener("click", function () {
        addBookToCompleted(bookListObject.id);
      });
  
      // const deleteBook = document.createElement("button");
      // deleteBook.classList.add("red");
      // deleteBook.addEventListener("click", function () {
      //   removeBookFromCompleted(bookListObject.id);
      // });
  
      container.append(doneRead);
    }
    return container;
  }
  
  // FUNCTION addBookToCompleted memindahkan dari shelf blm ke shelf done
  function addBookToCompleted(bookId) {
    const bookTarget = findBook(bookId);
    if (bookTarget == null) return;
    bookTarget.isCompleted = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
  
  // findBook untuk id book
  function findBook(bookId) {
    for (const bookItem of books) {
      if (bookItem.id === bookId) {
        return bookItem;
      }
    }
    return null;
  }
  
  // FUNCTION undoBookFromCompleted (undo book)
  function undoBookFromCompleted(bookId) {
    const bookTarget = findBook(bookId);
    if (bookTarget == null) return;
  
    bookTarget.isCompleted = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
  
  // FUNCTION delete atau removeListBook
  function removeBookFromCompleted(bookId) {
    const bookTarget = findBookIndex(bookId);
    if (bookTarget === -1) return;
    books.splice(bookTarget, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
  
  // FUNCTION findBookIndex
  function findBookIndex(bookId) {
    for (const index in books) {
      if (books[index].id === bookId) return index;
    }
    return -1;
  }
  
  // tampilkan array books dengan console log dulu
  document.addEventListener(RENDER_EVENT, function () {
    // console.log(books);
    const uncompletedBookList = document.getElementById("incompleteBookshelfList");
    uncompletedBookList.innerHTML = "";
  
    const completedBookList = document.getElementById("completeBookshelfList");
    completedBookList.innerHTML = ""; //perintah ini ada biar ga duplicate sama uncompletedbooklist
  
    for (const bookItem of books) {
      const bookElement = makeBook(bookItem);
      if (!bookItem.isCompleted) {
        uncompletedBookList.append(bookElement);
      } else {
        completedBookList.append(bookElement);
      }
    }
  });
  