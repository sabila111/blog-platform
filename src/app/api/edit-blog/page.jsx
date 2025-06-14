'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function EditBlogPage() {
  const router = useRouter()
  const params = useSearchParams()
  const id = params.get('id')

  const [form, setForm] = useState({
    title: '',
    category: '',
    imgUrl: '',
    content: '',
    date: '',
  })

  useEffect(() => {
    if (id) {
      fetch(`/http://localhost:3000/blogs/${id}`)
        .then(res => res.json())
        .then(data => {
          setForm({
            title: data.title || '',
            category: data.category || '',
            imgUrl: data.imgUrl || '',
            content: data.content || '',
            date: data.date?.slice(0, 10) || '',
          })
        })
    }
  }, [id])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/http://localhost:3000/blogs/edit', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, id }),
    })

    if (res.ok) {
      alert('Blog updated successfully')
      router.push('/all-blogs')
    } else {
      alert('Something went wrong')
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded" />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="w-full p-2 border rounded" />
        <input name="imgUrl" value={form.imgUrl} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border rounded" />
        <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" rows={5} className="w-full p-2 border rounded" />
        <input name="date" value={form.date} onChange={handleChange} type="date" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update Blog</button>
      </form>
    </div>
  )
}
