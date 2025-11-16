import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import BorrowList from '../components/borrows/BorrowList';
import type { Borrow } from '../types';

const BorrowingPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [borrows] = useState<Borrow[]>([
    { borrow_id: 1, user_id: 1, book_id: 1, borrow_date: '2023-01-01', due_date: '2023-01-15', status: 'active' },
  ]);

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Borrowing</h1>
          <div className="card bg-white shadow-sm border border-base-300 rounded-xl hover:shadow-md transition-all duration-200 p-4">
            <h2 className="text-xl font-bold mb-2 text-primary">Borrow Records</h2>
            <BorrowList borrows={borrows} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default BorrowingPage;