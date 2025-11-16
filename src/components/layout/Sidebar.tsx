import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <ul className={`menu bg-base-200 rounded-box w-56 p-2 transition-all duration-200 ${isOpen ? 'block' : 'hidden lg:block'}`}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'bg-primary/20 text-primary font-semibold border-l-4 border-primary transition-all duration-200' : 'hover:bg-base-300 hover:text-primary transition-all duration-200'}
          end
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className={({ isActive }) => isActive ? 'bg-primary/20 text-primary font-semibold border-l-4 border-primary transition-all duration-200' : 'hover:bg-base-300 hover:text-primary transition-all duration-200'}
        >
          Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/members"
          className={({ isActive }) => isActive ? 'bg-primary/20 text-primary font-semibold border-l-4 border-primary transition-all duration-200' : 'hover:bg-base-300 hover:text-primary transition-all duration-200'}
        >
          Members
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/borrowing"
          className={({ isActive }) => isActive ? 'bg-primary/20 text-primary font-semibold border-l-4 border-primary transition-all duration-200' : 'hover:bg-base-300 hover:text-primary transition-all duration-200'}
        >
          Borrowing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/categories"
          className={({ isActive }) => isActive ? 'bg-primary/20 text-primary font-semibold border-l-4 border-primary transition-all duration-200' : 'hover:bg-base-300 hover:text-primary transition-all duration-200'}
        >
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/settings"
          className={({ isActive }) => isActive ? 'bg-primary/20 text-primary font-semibold border-l-4 border-primary transition-all duration-200' : 'hover:bg-base-300 hover:text-primary transition-all duration-200'}
        >
          Settings
        </NavLink>
      </li>
    </ul>
  );
};

export default Sidebar;