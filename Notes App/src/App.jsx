import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <div className='h-screen bg-black text-white '>

      <form action="" className=' flex flex-col gap-5 items-start  justify-between p-10 ' onSubmit={(e)=>{
        submitHandler(e);
      }}>
        
          <input 
            type="text" 
            
            placeholder='Enter Notes Heading' 
            className='border-2 w-full font-medium rounded py-2 m-2 px-5 outline-none '
        />
        <textarea
            placeholder='Enter Details' 
            className='border-2 w-full font-medium rounded py-2 px-5 h-32 flex items-start m-2 outline-none '
        />
        <button className='bg-white w-full text-black font-medium py-2 px-5 rounded outline-none' >Add Note</button>
        
        
        {/* <img className='h-52' src='https://imgs.search.brave.com/-_fMBrgW105d5l-4b9vjAgNtkFj2NTYA82X85vePEKY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9ZZWxs/b3ctU3RpY2t5LU5v/dGUtUE5HLnBuZw' alt="" /> */}
        </form>
        <div className='flex flex-wrap p-10'>

        <div className='h-32 w-32 rounded-2xl bg-white'></div>
        </div>


        </div>

    </>
  )
}

export default App
