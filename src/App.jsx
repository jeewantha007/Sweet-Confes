import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import MiniSiteList from './components/MiniSiteList'


function App() {
  return (
    <>
    <Navbar/>
{/* <Homepage/> */}
<MiniSiteList/>
    <Footer/>

    </>
  )
}

export default App