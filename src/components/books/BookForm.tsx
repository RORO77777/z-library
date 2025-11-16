import React, { useState, useEffect } from 'react';
import type { Book } from '../../types';

interface BookFormProps {
  onSubmit: (book: Omit<Book, 'book_id'>) => void;
  initialBook?: Book;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit, initialBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [copiesTotal, setCopiesTotal] = useState<number>(0);
  const [categoryId, setCategoryId] = useState<number>(0);

  useEffect(() => {
    if (initialBook) {
      setTitle(initialBook.title);
      setAuthor(initialBook.author);
      setIsbn(initialBook.isbn || '');
      setCopiesTotal(initialBook.copies_total || 0);
      setCategoryId(initialBook.category_id || 0);
    }
  }, [initialBook]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      author,
      isbn: isbn || undefined,
      category_id: categoryId || undefined,
      copies_total: copiesTotal || undefined,
      copies_available: copiesTotal || undefined,
    });
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <label className="label">
        <span className="label-text">Title</span>
      </label>
      <input type="text" className="input input-bordered" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label className="label">
        <span className="label-text">Author</span>
      </label>
      <input type="text" className="input input-bordered" value={author} onChange={(e) => setAuthor(e.target.value)} required />

      <label className="label">
        <span className="label-text">ISBN</span>
      </label>
      <input type="text" className="input input-bordered" value={isbn} onChange={(e) => setIsbn(e.target.value)} />

      <label className="label">
        <span className="label-text">Copies Total</span>
      </label>
      <input type="number" className="input input-bordered" value={copiesTotal} onChange={(e) => setCopiesTotal(Number(e.target.value))} />

      <label className="label">
        <span className="label-text">Category ID</span>
      </label>
      <input type="number" className="input input-bordered" value={categoryId} onChange={(e) => setCategoryId(Number(e.target.value))} />

      <button type="submit" className="btn btn-primary mt-4">Submit</button>
    </form>
  );
};

export default BookForm;