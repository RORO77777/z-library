import React from 'react';
import type { Book } from '../../types';

interface BookCardProps {
  book: Book;
  onEdit: (book: Book) => void;
  onDelete: (bookId: number) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onEdit, onDelete }) => {
  const isAvailable = (book.copies_available ?? 0) > 0;

  return (
    <div className="card bg-white shadow-sm border border-base-300 rounded-xl hover:shadow-md transition-all duration-200">
      <div className="card-body">
        <h2 className="card-title text-gray-800 font-semibold">{book.title}</h2>
        <p className="text-gray-600">Author: {book.author}</p>
        {book.isbn && <p className="text-gray-600">ISBN: {book.isbn}</p>}
        <div className="card-actions justify-end">
          <div className={`badge rounded-full px-3 py-1 text-sm ${isAvailable ? 'badge-success' : 'badge-error'}`}>
            {isAvailable ? 'Available' : 'Unavailable'}
          </div>
          <div className="space-x-2">
            <button className="btn btn-secondary hover:btn-secondary-focus transition-all duration-200" onClick={() => onEdit(book)}>Edit</button>
            <button className="btn btn-error btn-outline hover:btn-error transition-all duration-200" onClick={() => onDelete(book.book_id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;