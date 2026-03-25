import { useState } from 'react'
import './App.css'
import { SimpleCard } from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-linear-to-r from-gray-200 via-gray-100 to-cyan-100 animate-gradient-x'>
        <nav className='flex items-center p-4 shadow-sm shadow-gray-200'>
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

        <div className='flex flex-col mt-30 gap-4'>
          <div className='text-8xl justify-center text-center font-bold font-serif'>Explore open-source</div>
          <div className='text-7xl text-center font-semibold font-serif'>Master the craft</div>
          <p className='text-xl text-center  '>Curated github repositories</p>
          <div className='flex justify-center p-5'>
            <input type="text" placeholder='Search' className='w-1/2 p-3 border border-gray-300 rounded-full' />
          </div>

        </div>
        <div className='flex justify-center items-center ml-10 flex-wrap gap-8'>

          <SimpleCard
            title="React Framework"
            description="A popular framework for building user interfaces."
            buttonText="Explore"
          />
          <SimpleCard
            title="Tailwind CSS"
            description="Utility-first CSS framework for rapid UI development."
            buttonText="Docs"
          />
          <SimpleCard
            title="Vite"
            description="Next generation frontend tooling. It's fast!"
            buttonText="Try Now"
          />
          <SimpleCard
            title=" daisyUI"
            description="The most popular component library for Tailwind CSS."
            buttonText="Components"
          />
          <SimpleCard
            title="Node.js"
            description="JavaScript runtime built on Chrome's V8 engine."
            buttonText="Download"
          />
          <SimpleCard />

        </div>
      </div>
    </>
  )
}

export default App
