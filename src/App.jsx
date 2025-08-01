import { useState } from 'react'
import './styles/styles.css'
import Header from './componets/Header/Header'
import Hero from './componets/Hero/Hero'
import Languages from './componets/Languages/languages'
import Docs from './componets/Docs/Docs'
import Examples from './componets/Examples/Examples'
import Api from './componets/Api/Api'

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
    </>
  )
}

export default App
