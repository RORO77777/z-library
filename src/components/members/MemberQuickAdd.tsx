import React, { useState } from 'react';

interface MemberQuickAddProps {
  onSubmit: (member: { name: string; email: string }) => void;
}

const MemberQuickAdd: React.FC<MemberQuickAddProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} required />

      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <button type="submit" className="btn btn-primary mt-4">Submit</button>
    </form>
  );
};

export default MemberQuickAdd;