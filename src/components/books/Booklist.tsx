import React from 'react';
import type { Book } from '../../types';
import BookCard from './BookCard';

interface BookListProps {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (bookId: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onEdit, onDelete }) => {
  if (books.length === 0) {
    return <p>No books available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <BookCard key={book.book_id} book={book} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BookList;