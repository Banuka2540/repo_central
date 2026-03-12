import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen'>
        <nav className='flex items-center p-5 shadow-sm shadow-gray-200'>
          <div className="flex-2 items-center gap-2">
          <span className="text-xl font-bold tracking-tight">GitLearn</span>
          </div>
          <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            Dark
          </button>
        </div>

        </nav>

        <div className='flex flex-col mt-40 gap-4'>
          <div className='text-8xl justify-center text-center font-bold font-serif'>Explore open-source</div>
          <div className='text-7xl text-center font-semibold font-serif'>Master the craft</div>

        </div>
        <div className='flex justify-content items-center h-screen'>
          <p className='text-4xl'>Welcome to my app!</p>
        </div>
      </div>
    </>
  )
}

export default App
