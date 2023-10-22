function solve(arr) {
  let shelfWithBooks = arr.shift().split('&');
  let currentShelf = [...shelfWithBooks];

  for (let els of arr) {
    let tokens = els.split(' | ');
    let command = tokens[0];
    let book1 = tokens[1];
    let book2 = tokens[2];

    if (command === 'Done') {
      break;
    }

    if (command === 'Add Book' && !shelfWithBooks.includes(book1)) {
      shelfWithBooks.unshift(book1);
    } else if (command === 'Take Book' && shelfWithBooks.includes(book1)) {
      shelfWithBooks.splice(shelfWithBooks.indexOf(book1), 1);
    } else if (command === 'Swap Books' && shelfWithBooks.includes(book1) && shelfWithBooks.includes(book2)) {
      let index1 = shelfWithBooks.indexOf(book1);
      let index2 = shelfWithBooks.indexOf(book2);
      [shelfWithBooks[index1], shelfWithBooks[index2]] = [shelfWithBooks[index2], shelfWithBooks[index1]];
    } else if (command === 'Insert Book' && !shelfWithBooks.includes(book1)) {
      shelfWithBooks.push(book1);
    } else if (command === 'Check Book') {
      book1 = Number(book1);

      if (book1 >= 0 && book1 < shelfWithBooks.length) {
        console.log(currentShelf[book1]);
      }
    }
  }

  console.log(shelfWithBooks.join(', '));
}

solve([
  "War and Peace&Hamlet&Ulysses&Madame Bovary",
  "Check Book | 2",
  "Swap Books | Don Quixote | Ulysses",
  "Done"
]);
