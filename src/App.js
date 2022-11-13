import Header from "./components/Header";
import Home from "./sections/Home";
import Rentals from "./sections/Rentals";
import Contact from "./sections/Contact";
import AboutUs from "./sections/AboutUs";
import NavProvider from "./context/NavContext";


export default function App() {

  return (
    <div>
      <NavProvider>
        <Header/>
        <Home />
        <Rentals />
        <AboutUs />
        <Contact />
      </NavProvider>
    </div>
  )
}
