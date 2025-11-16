import React from 'react';
import { FaBars, FaUser } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <button className="btn btn-ghost lg:hidden hover:text-primary transition-all duration-200" onClick={onToggleSidebar}>
          <FaBars />
        </button>
        <a className="btn btn-ghost normal-case text-xl text-primary hover:text-primary transition-all duration-200">Z-Library</a>
      </div>
      <div className="navbar-end mr-4">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:bg-base-200 transition-all duration-200">
            <div className="w-10 rounded-full bg-base-200 flex items-center justify-center">
              <FaUser className="w-6 h-6 text-primary" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-lg bg-base-100 rounded-xl w-52 animate-in fade-in">
            <li>
              <NavLink to="/settings" className="hover:text-primary transition-all duration-200">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/settings" className="hover:text-primary transition-all duration-200">Settings</NavLink>
            </li>
            <li>
              <button onClick={handleLogout} className="hover:text-error transition-all duration-200">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;