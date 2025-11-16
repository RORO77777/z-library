export type User = {
  user_id: number;
  username: string;
  email: string;
  role: string;
};

export type Category = {
  category_id: number;
  name: string;
  description?: string;
};

export type Book = {
  book_id: number;
  title: string;
  author: string;
  isbn?: string;
  category_id?: number;
  copies_total?: number;
  copies_available?: number;
};

export type Borrow = {
  borrow_id: number;
  user_id: number;
  book_id: number;
  borrow_date: string;
  due_date: string;
  return_date?: string;
  status: string;
};

export type Comment = {
  comment_id: number;
  user_id: number;
  book_id: number;
  rating?: number;
  comment?: string;
  created_at?: string;
};