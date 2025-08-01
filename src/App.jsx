import { useState } from 'react'
import './styles/styles.css'
import Header from './componets/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    </>
  )
}

export default App
