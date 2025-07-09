import React from 'react';

function Navbar({ showForm, handleCreateBlog }) {
  return (
    <nav className="navbar">
      <div className="nav-title" style={{cursor: 'pointer'}}>My Blog</div>
      <div className="nav-links">
        <button className="nav-btn" style={{display: 'none'}}>Home</button>
        <button className="nav-btn create-btn" onClick={handleCreateBlog}>
          {showForm ? 'Cancel' : 'Create Blog'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar; 