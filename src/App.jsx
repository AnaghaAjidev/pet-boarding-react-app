import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBoarding from './components/AddBoarding'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewBoarding from './components/ViewBoarding'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>

        <Route path='/' element={<AddBoarding/>}/>
        <Route path='/view' element={<ViewBoarding/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
