import { useState } from 'react'
import './styles/styles.css'
import Header from './componets/Header/Header'
import Hero from './componets/Hero/Hero'
import Languages from './componets/Languages/languages'
import Docs from './componets/Docs/Docs'
import Examples from './componets/Examples/Examples'
import Api from './componets/Api/Api'
import About from './componets/About/About'
import Features from './componets/Features/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <Languages/>
    <Docs/>
    <Examples/>
    <Api/>
    <About/>
    <Features/>
    </>
  )
}

export default App
