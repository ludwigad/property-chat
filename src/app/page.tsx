import { useState } from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          AI-Powered Realtor Assistant
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Let AI handle home search, follow-ups, and lead generation.
        </p>

        {/* Waitlist Form */}
        <div className="max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email to join the waitlist"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join the Waitlist
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-4 text-center text-gray-600">
        <p>Powered by Property Chat</p>
      </footer>
    </main>
  )
} 