'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Register() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(form),
    })

    if (!res.ok) {
      setError(await res.text())
    } else {
      router.push('/login')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h2 className="text-4xl text-center font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full border p-2" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input className="w-full border p-2" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input className="w-full border p-2" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        {error && <p className="text-red-500">{error}</p>}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  )
}
