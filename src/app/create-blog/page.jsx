'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBlogPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    imgUrl: "",
    content: "",
    date: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Blog post created!");
      router.push("/"); // or /blogs
    } else {
      alert("Failed to create blog post.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Create New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full border p-2 rounded"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="imgUrl"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          value={formData.imgUrl}
          onChange={handleChange}
        />

        <textarea
          name="content"
          placeholder="Content"
          className="w-full border p-2 rounded h-32"
          value={formData.content}
          onChange={handleChange}
          required
        ></textarea>

        <input
          type="date"
          name="date"
          className="w-full border p-2 rounded"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Post Blog
        </button>
      </form>
    </div>
  );
}
