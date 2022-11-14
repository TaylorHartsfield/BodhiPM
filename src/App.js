import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Home from "./sections/Home";
import Rentals from "./sections/Rentals";
import Contact from "./sections/Contact";
import AboutUs from "./sections/AboutUs";
import NavProvider from "./context/NavContext";


export default function App() {

  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <div>
      {loading ? <Loading /> :
      <NavProvider>
        <Header/>
        <Home />
        <Rentals />
        <AboutUs />
        <Contact />
      </NavProvider>
 
  }
    </div>
  )
}
