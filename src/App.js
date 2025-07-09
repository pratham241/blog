import React, { useState } from 'react';
import './App.css';
import postsData from './posts.json';
import Navbar from './Navbar';
import CreateBlog from './CreateBlog';
import BlogList from './BlogList';

function App() {
  const [posts, setPosts] = useState(postsData);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: '',
    author: '',
    body: '',
  });

  function handleCreateBlog() {
    setShowForm(!showForm);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.title && form.body && form.author) {
      setPosts([
        { id: Date.now(), title: form.title, body: form.body, author: form.author },
        ...posts,
      ]);
      setForm({ title: '', author: '', body: '' });
      setShowForm(false);
    }
  }

  return (
    <div className="container">
      <Navbar showForm={showForm} handleCreateBlog={handleCreateBlog} />
      <div className="content-box">
        {showForm ? (
          <CreateBlog form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
        ) : (
          <BlogList posts={posts} />
        )}
      </div>
    </div>
  );
}

export default App;
