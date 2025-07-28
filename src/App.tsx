import { useState } from 'react'
import './App.css'
import Clock from './components/time'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className='bg-gradient-to-r from-pink-600 to-purple-600'>
<div className='flex justify-center text-6xl text-white font-bold pt-20 bg-gradient-to-r from-pink-600 to-purple-600'>Typescript And</div>
 <div className='flex justify-center text-6xl text-white font-bold 
 hover:rotate-360 transition-transform duration-500 cursor-default p-10'>Tailwindcss</div>
 <p className='flex justify-center text-gray-300'>Tailwind CSS and Typescript together enable fast, 
  type-safe and utility-first styling in modern frontend development.</p>
  <Clock/>
  <div className='flex justify-center m-10'>
  <button className=' bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium 
   p-3 rounded-full w-40 transition-transform transform hover:scale-120'>Get Started </button>
     <button className=' bg-transparent border-purple-300 border-2 text-white font-medium 
   p-3 rounded-full w-40 transition-transform transform hover:scale-120 ml-3'>Learn More </button>
  </div>
  <h1 className='text-white flex justify-center text-4xl font-bold'>Amazing Features</h1>
  <div className='flex justify-around m-10'>
    <div className='border-purple-300 border-2 w-80 bg-purple-400 p-2 rounded-3xl hover:translate-y-7 transition-transform duration-600'>
      <img src='https://api.iconify.design/material-symbols:tips-and-updates-rounded.svg?color=%230fffff' className='w-10 m-3'></img>
      <h1 className='text-3xl text-white font-medium ml-3  '> Super Fast</h1>
      <p className=' text-white m-3 '>Tailwind CSS is a fast, utiliy-first framework for rapidly building custom and responsive UIs</p>
    </div>

    <div className='border-purple-300 border-2 w-80 bg-purple-400 p-2 rounded-3xl hover:translate-y-7 transition-transform duration-600'>
      <img src='https://api.iconify.design/material-symbols:shield-locked.svg?color=%230fff8f' className='w-10 m-3'></img>
      <h1 className='text-3xl text-white font-medium ml-3 '> Secure</h1>
      <p className=' text-white  m-3'>Built with security and privacy as top priorities </p></div>

    <div className='border-purple-300 border-2 w-80 bg-purple-400 p-2 rounded-3xl hover:translate-y-7 transition-transform duration-600 '>
      <img src='https://api.iconify.design/solar:global-linear.svg?color=%23e147b8' className='w-10 m-3'></img>
      <h1 className='text-3xl text-white font-medium ml-3 '> Global</h1>
      <p className=' text-white  m-3'>Accessible worldwide with multiple language support </p>


    </div>

  </div>
      <p className=' text-purple-400 flex justify-center text-3xl font-bold m-2 '>Using Hook</p>
      <div className="flex justify-center text-white text-3xl  ">
        <button className='border-purple-300 border-2 rounded-full p-3' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
        </div>
    </>
  )
}

export default App
