import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
// import { read } from 'fs';


const BookList = () => {
    const { book } = useContext(BookContext)
    return books.length ? (
        <div className='book-list'>
            <ul>
                {books.map(book => {
                    return (<BookDetails book={book} key={book.id} />);
                })}
            </ul>
        </div>
    ) : (
            <div className='empty'>
                No Books to read. Hello free time
            </div >
        );
}

export default BookList;