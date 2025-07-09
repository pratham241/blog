import React from 'react';

function CreateBlog({ form, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 32 }}>
      <div style={{ marginBottom: 12 }}>
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={form.title}
          onChange={handleChange}
          style={{ width: '100%', padding: 10, borderRadius: 4, border: '1px solid #444', background: '#23272a', color: '#f1f1f1', marginBottom: 8 }}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={form.author}
          onChange={handleChange}
          style={{ width: '100%', padding: 10, borderRadius: 4, border: '1px solid #444', background: '#23272a', color: '#f1f1f1', marginBottom: 8 }}
          required
        />
        <textarea
          name="body"
          placeholder="Write your blog here..."
          value={form.body}
          onChange={handleChange}
          style={{ width: '100%', padding: 10, borderRadius: 4, border: '1px solid #444', background: '#23272a', color: '#f1f1f1', minHeight: 80 }}
          required
        />
      </div>
      <button type="submit" className="nav-btn create-btn" style={{ marginTop: 8 }}>Add Blog</button>
    </form>
  );
}

export default CreateBlog; 