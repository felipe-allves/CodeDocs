import { useState } from 'react'
import './styles/styles.css'
import Header from './componets/Header/Header'
import Hero from './componets/Hero/Hero'
import Languages from './componets/Languages/languages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <Languages/>
    </>
  )
}

export default App
