
import { Outlet } from 'react-router'
import './App.css'
import Header from './ShareComponents/Header/Header'
import Footer from './ShareComponents/Footer/Footer'

function App() {
 

  return (
    <>
    <Header/>
  <Outlet/>
  <Footer/>
    </>
  )
}

export default App
