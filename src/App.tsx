import Navbar from './components/navbar'
import Content from './components/content'
import Sidebar from './components/sidebar'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Navbar />
      <Content /> 
      <Sidebar />
      Start
    </div>
  )
}

export default App
