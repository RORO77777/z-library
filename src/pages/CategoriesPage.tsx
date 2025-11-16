import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';

const CategoriesPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Categories</h1>
          <div className="card bg-white shadow-sm border border-base-300 rounded-xl hover:shadow-md transition-all duration-200 p-4">
            <p className="text-gray-600">Categories management would go here.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoriesPage;