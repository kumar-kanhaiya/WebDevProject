import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Section1 />
        <Section2 />
      </div>
    </>
  )
}

export default App
