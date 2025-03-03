'use client'

import { useState } from 'react'

export default function Home() {
  const [selectedPrompt, setSelectedPrompt] = useState<number | null>(null);

  const prompts = [
    {
      category: 'Property Search',
      text: 'Find me a 4-bedroom house in Portland with a view under $850,000',
      response: "I found 6 properties matching your criteria in Portland. The top match is a $825,000 4-bed, 3-bath home in Council Crest with panoramic city views. It features a modern kitchen, primary suite with mountain views, and a spacious deck. Would you like more details about this or the other properties?"
    },
    {
      category: 'Neighborhood',
      text: 'What are the safest neighborhoods in Chicago with good public transportation?',
      response: "Based on recent crime statistics and transit data, Lincoln Park and Lakeview are excellent choices. Lincoln Park has 45% lower crime than the city average and is served by both the Brown and Red Lines. Lakeview has multiple L stops and extensive bus routes, with a 38% lower crime rate. Both areas also offer great restaurants and parks. Would you like to see properties in these neighborhoods?"
    },
    {
      category: 'Schools',
      text: 'Show me houses in districts with top-rated elementary schools in San Diego',
      response: "I've identified homes in the Torrey Pines and Scripps Ranch areas, which have elementary schools rated 9/10 or higher. For example, there's a lovely 4-bed home for $925k near Jerabek Elementary (rated 10/10). The school has exceptional test scores and strong parent reviews. Shall I show you more options in these districts?"
    },
    {
      category: 'Investment',
      text: 'Which areas in Denver have shown the best property value growth in the last 5 years?',
      response: "The RiNo (River North) Art District has seen the highest appreciation at 58% over 5 years, followed by LoHi at 52%. RiNo's growth is driven by new developments and an emerging tech scene. Average ROI for rental properties here is 7.2% annually. Would you like to see some investment opportunities in these areas?"
    },
    {
      category: 'Realtor Match',
      text: 'Find me a realtor who specializes in first-time home buyers in Nashville',
      response: "I've matched you with Sarah Johnson, who has helped 45+ first-time buyers in Nashville this year. She has a 4.9/5 rating and specializes in down payment assistance programs. She's particularly knowledgeable about the East Nashville and Germantown areas. Would you like me to arrange an introduction?"
    },
    {
      category: 'Amenities',
      text: 'Show me homes within 15 minutes of hiking trails and organic grocery stores',
      response: "I found several matches! There's a beautiful 3-bed home for $650k that's 8 minutes from Whole Foods and walking distance to Cedar Creek Trail. Another option is 12 minutes from Trader Joe's and directly adjacent to Wildwood Trail. Both areas have great walkability scores. Which would you like to explore first?"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0c1220] text-[#f8fafc]">
      {/* Header - Made sticky */}
      <header className="sticky top-0 z-50 bg-[#0c1220]/80 backdrop-blur-sm py-4 border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#38bdf8] to-[#2563eb] bg-clip-text text-transparent">
            PropertyChat
          </div>
        </div>
      </header>

      {/* Main Section with Hero - Improved mobile spacing */}
      <section className="py-8 md:py-16 min-h-[80vh] bg-gradient-to-b from-[#0c1220] to-[#111827]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
            {/* Value Proposition - Better mobile text sizes */}
            <div className="flex-1 min-w-[300px] text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-[#f8fafc] to-[#bae6fd] bg-clip-text text-transparent">
                AI-Powered Realtor Assistant
              </h1>
              <p className="text-base sm:text-lg text-[#cbd5e1] mb-6 md:mb-8 max-w-[500px] mx-auto md:mx-0">
                Simply chat to find your perfect home. Let AI handle property search, neighborhood insights, and realtor matching.
              </p>
              
              {/* Responsive form */}
              <form className="flex flex-col sm:flex-row gap-2 max-w-[400px] mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email to join"
                  className="flex-1 px-4 py-3 bg-[#111827] border border-[#1e293b] text-[#f8fafc] rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] text-white font-semibold rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:brightness-110 transition-all whitespace-nowrap"
                >
                  Join the Waitlist
                </button>
              </form>
            </div>

            {/* Chat Example - Full width on mobile */}
            <div className="flex-1 w-full md:w-auto">
              <div className="bg-[#111827] rounded-xl border border-[#1e293b] p-4 md:p-5 shadow-lg max-w-[400px] mx-auto">
                <div className="flex items-center gap-3 pb-4 border-b border-[#1e293b]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] flex items-center justify-center text-white font-semibold">
                    PC
                  </div>
                  <div>PropertyChat Assistant</div>
                </div>

                <div className="space-y-4 my-5 min-h-[250px]">
                  <div className="max-w-[80%] ml-auto bg-[#1e293b] p-3 rounded-xl rounded-br-sm">
                    I need a 3-bedroom house in Austin with a yard for under $600k, close to good schools.
                  </div>
                  <div className="max-w-[80%] bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] p-3 rounded-xl rounded-bl-sm">
                    I found 8 matches in Austin. The best option is a $575k 3-bed in Anderson Mill, with excellent schools nearby and a fenced backyard.
                  </div>
                  <div className="max-w-[80%] ml-auto bg-[#1e293b] p-3 rounded-xl rounded-br-sm">
                    What's the neighborhood like?
                  </div>
                  <div className="max-w-[80%] bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] p-3 rounded-xl rounded-bl-sm">
                    Anderson Mill is family-friendly with 32% lower crime than Austin average. There are 2 parks within walking distance, and the area has seen 8% appreciation in the last year.
                  </div>
                </div>

                <div className="flex border border-[#1e293b] rounded-lg overflow-hidden bg-[#0c1220]">
                  <input
                    type="text"
                    placeholder="Ask about properties..."
                    className="flex-1 px-4 py-3 bg-transparent text-[#f1f5f9] focus:outline-none"
                  />
                  <button className="px-5 bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] text-white">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* AI-First Benefits Section - Better mobile grid */}
          <section className="py-12 md:py-16 bg-[#0c1220]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4 bg-gradient-to-r from-[#f8fafc] to-[#bae6fd] bg-clip-text text-transparent px-4">
                Why AI-First Real Estate?
              </h2>
              <p className="text-[#94a3b8] text-center mb-8 md:mb-12 max-w-2xl mx-auto px-4">
                Skip the endless scrolling and filtering. Get straight to your perfect property through natural conversation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-4">
                <div className="bg-[#111827] p-6 rounded-xl border border-[#1e293b]">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#f1f5f9] mb-2">Natural Conversations</h3>
                  <p className="text-[#94a3b8]">
                    Simply describe what you're looking for in plain English. No more complex search filters or checkboxes.
                  </p>
                </div>

                <div className="bg-[#111827] p-6 rounded-xl border border-[#1e293b]">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#f1f5f9] mb-2">Instant Insights</h3>
                  <p className="text-[#94a3b8]">
                    Get immediate answers about neighborhoods, schools, market trends, and property details.
                  </p>
                </div>

                <div className="bg-[#111827] p-6 rounded-xl border border-[#1e293b]">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#f1f5f9] mb-2">Smart Matching</h3>
                  <p className="text-[#94a3b8]">
                    Our AI understands your preferences and automatically matches you with the most relevant properties and realtors.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Updated Prompts Carousel - Mobile-optimized scrolling */}
          <div className="mt-12 md:mt-16 bg-[#111827] rounded-xl border border-[#1e293b] shadow-lg p-4 md:p-8">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl text-[#f1f5f9] mb-2">Try it yourself</h2>
              <p className="text-sm md:text-base text-[#94a3b8]">Swipe to see examples →</p>
            </div>

            <div className="flex overflow-x-auto gap-3 md:gap-5 pb-4 -mx-4 px-4 scrollbar-thin scrollbar-thumb-[#374151] scrollbar-track-[#111827] snap-x snap-mandatory">
              {prompts.map((prompt, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedPrompt(index)}
                  className={`flex-none w-[280px] snap-center bg-[#0c1220] rounded-lg p-4 md:p-5 border-l-4 
                    ${selectedPrompt === index ? 'border-[#3b82f6]' : 'border-[#0ea5e9]'}
                    cursor-pointer hover:transform hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className="text-xs font-semibold text-[#7dd3fc] uppercase tracking-wider mb-2">
                    {prompt.category}
                  </div>
                  <div className="text-[#e2e8f0]">{prompt.text}</div>
                </div>
              ))}
            </div>

            {/* Chat Response - Better mobile spacing */}
            {selectedPrompt !== null && (
              <div className="mt-6 md:mt-8 max-w-3xl mx-auto px-2">
                <div className="flex gap-3 md:gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] flex-shrink-0 flex items-center justify-center text-white font-semibold">
                    PC
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] p-3 md:p-4 rounded-xl rounded-tl-sm text-white animate-fadeIn text-sm md:text-base">
                      {prompts[selectedPrompt].response}
                    </div>
                    <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
                      <button className="px-3 md:px-4 py-2 bg-[#1e293b] text-[#94a3b8] rounded-lg hover:bg-[#2d3748] transition-colors text-sm">
                        Tell me more
                      </button>
                      <button className="px-3 md:px-4 py-2 bg-[#1e293b] text-[#94a3b8] rounded-lg hover:bg-[#2d3748] transition-colors text-sm">
                        Show properties
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer - Responsive layout */}
      <footer className="py-8 md:py-10 border-t border-[#1e293b] mt-12 md:mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#94a3b8] font-semibold text-center md:text-left">
              Powered by Property Chat
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-5">
              <a href="#" className="text-[#94a3b8] hover:text-[#7dd3fc] transition-colors">Privacy</a>
              <a href="#" className="text-[#94a3b8] hover:text-[#7dd3fc] transition-colors">Terms</a>
              <a href="#" className="text-[#94a3b8] hover:text-[#7dd3fc] transition-colors">For Realtors</a>
              <a href="#" className="text-[#94a3b8] hover:text-[#7dd3fc] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 