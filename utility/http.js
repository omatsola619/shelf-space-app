import axios from 'axios';

export function saveBooks(bookData) {
    axios.post(
        "https://shelfspaceapp-757ab-default-rtdb.firebaseio.com/books.json",
        bookData
    )
}