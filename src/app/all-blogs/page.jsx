'use client'

import { useEffect, useState } from "react";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs/get");
      const data = await res.json();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure to delete?");
    if (!confirm) return;

    const res = await fetch("/api/blogs/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      alert("Deleted");
      setBlogs(blogs.filter(blog => blog._id !== id));
    } else {
      alert("Delete failed");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center">All Blog Posts</h1>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="border p-4 mb-4 rounded shadow-md bg-white">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-500">{blog.category} • {new Date(blog.date).toLocaleDateString()}</p>
            <img src={blog.imgUrl} alt={blog.title} className="w-full h-48 object-cover mt-2 mb-2 rounded" />
            <p>{blog.content.substring(0, 100)}...</p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => handleDelete(blog._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <a
                href={`/edit-blog?id=${blog._id}`}
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
