import React from 'react';

function BlogList({ posts }) {
  return (
    <div className="post-list-box">
      <h2>Blog Posts</h2>
      <ul style={{ padding: 0 }}>
        {posts.map(post => (
          <li key={post.id} style={{ listStyle: 'none', marginBottom: 24 }}>
            <div className="post-box">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <p className="author">Author: {post.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList; 