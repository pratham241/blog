import React, { useState } from 'react';
import './App.css';

function App() {
  const posts = [
    { id: 1, title: 'My First Blog', body: 'This is my first blog post.' },
    { id: 2, title: 'My location', body: 'I am from India' },
    { id: 3, title: 'College', body: 'I am a student of Chemical Engineering at IIT Kharagpur.' },
  ];

  function handleCreateBlog() {
    // Placeholder for create blog
  }

  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-title" style={{cursor: 'pointer'}}>My Blog</div>
        <div className="nav-links">
          <button className="nav-btn" style={{display: 'none'}}>Home</button>
          <button className="nav-btn create-btn" onClick={handleCreateBlog}>Create Blog</button>
        </div>
      </nav>
      <div className="content-box">
        <div className="post-list-box">
          <h2>Blog Posts</h2>
          <ul style={{ padding: 0 }}>
            {posts.map(post => (
              <li key={post.id} style={{ listStyle: 'none', marginBottom: 24 }}>
                <div className="post-box">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <p style={{fontSize: '0.95em', color: '#888', marginTop: 8}}>Author: Pratham</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
