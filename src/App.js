import React, { useEffect } from "react";
import {useState} from "react";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Home from "./sections/Home";
import Rentals from "./sections/Rentals";
import Contact from "./sections/Contact";
import AboutUs from "./sections/AboutUs";
import NavProvider from "./context/NavContext";


export default function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('./assets/img/CB.jpg')
    .then((res) => res.blob)
    .then((ready) => {
      setLoaded(true)
    })
  
  }, [])


  return (
    <div>
      {loaded? 
      <NavProvider>
        <Header/>
        <Home />
        <Rentals />
        <AboutUs />
        <Contact />
      </NavProvider>
      :<Loading />}

    </div>
  )
}
