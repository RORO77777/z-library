import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import MemberQuickAdd from '../components/members/MemberQuickAdd';

const MembersPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAddMember = (member: { name: string; email: string }) => {
    console.log('Add member:', member);
    // TODO: Add to state or API
  };

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Members</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="card bg-white shadow-sm border border-base-300 rounded-xl hover:shadow-md transition-all duration-200 p-4">
                <h2 className="text-xl font-bold mb-2 text-primary">Member List</h2>
                <p className="text-gray-600">Member list component would go here.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="card bg-white shadow-sm border border-base-300 rounded-xl hover:shadow-md transition-all duration-200 p-4">
                <h2 className="text-xl font-bold mb-2 text-primary">Add Member</h2>
                <MemberQuickAdd onSubmit={handleAddMember} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MembersPage;