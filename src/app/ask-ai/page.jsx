'use client'
import { useState } from 'react'

export default function AskAI() {
  const [prompt, setPrompt] = useState('')
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAsk = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    })

    const data = await res.json()
    setReply(data.reply)
    setLoading(false)
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h2 className="text-4xl font-bold mb-4 text-center">Ask  AI</h2>
      <form onSubmit={handleAsk} className="space-y-4">
        <textarea
          className="w-full border p-2 rounded"
          rows={4}
          placeholder="Ask me anything..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
        <button className="bg-blue-700 text-white px-4 py-2 rounded">
          {loading ? 'Thinking...' : 'Ask AI'}
        </button>
      </form>

      {reply && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="font-bold mb-2">AI Response:</h3>
          <p className="whitespace-pre-wrap">{reply}</p>
        </div>
      )}
    </div>
  )
}
