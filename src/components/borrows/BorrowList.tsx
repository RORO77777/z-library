import React from 'react';
import type { Borrow } from '../../types';

interface BorrowListProps {
  borrows: Borrow[];
}

const BorrowList: React.FC<BorrowListProps> = ({ borrows }) => {
  return (
    <div>
      <h3 className="text-lg font-bold">Borrow Records</h3>
      {borrows.length === 0 ? (
        <p>No borrow records.</p>
      ) : (
        <ul className="list-disc list-inside">
          {borrows.map((borrow) => (
            <li key={borrow.borrow_id}>Book {borrow.book_id} borrowed by User {borrow.user_id} on {borrow.borrow_date}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BorrowList;