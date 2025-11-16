import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import BookList from '../components/books/Booklist';
import BookForm from '../components/books/BookForm';
import type { Book } from '../types';

const BooksPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>([
    { book_id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '978-0-7432-7356-5', copies_total: 10, copies_available: 5, category_id: 1 },
    { book_id: 2, title: '1984', author: 'George Orwell', copies_total: 8, copies_available: 0, category_id: 2 },
  ]);
  const [editingBook, setEditingBook] = useState<Book | undefined>();

  const handleAddBook = (book: Omit<Book, 'book_id'>) => {
    const newBook: Book = { ...book, book_id: Date.now() };
    setBooks([...books, newBook]);
    setEditingBook(undefined);
  };

  const handleEditBook = (book: Book) => {
    setEditingBook(book);
  };

  const handleDeleteBook = (bookId: number) => {
    setBooks(books.filter(b => b.book_id !== bookId));
  };

  const handleBookSubmit = (book: Omit<Book, 'book_id'>) => {
    if (editingBook) {
      setBooks(books.map(b => b.book_id === editingBook.book_id ? { ...book, book_id: b.book_id } : b));
      setEditingBook(undefined);
    } else {
      handleAddBook(book);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Books</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="card bg-white shadow-sm border border-base-300 rounded-xl hover:shadow-md transition-all duration-200 p-4">
                <h2 className="text-xl font-bold mb-2 text-primary">Book List</h2>
                <BookList books={books} onEdit={handleEditBook} onDelete={handleDeleteBook} />
              </div>
            </div>
            <div className="space-y-4">
              <div className="card bg-white shadow-sm border border-base-300 rounded-xl hover:shadow-md transition-all duration-200 p-4">
                <h2 className="text-xl font-bold mb-2 text-primary">Add/Edit Book</h2>
                <BookForm onSubmit={handleBookSubmit} initialBook={editingBook} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BooksPage;