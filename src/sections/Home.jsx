import { useNav } from "../hooks/useNav";
import styles from "../styles/Home.module.css";
import bg from "../assets/img/CB.jpg";
import smallBG from "../assets/img/CBSmall.jpg";
import { useState } from "react";


export default function Home() {

    const homeRef = useNav("Home");

    const [isLoaded, setIsLoaded] = useState(false);

    const handleClickRentals = () =>{
        document.getElementById("rentalsSection").scrollIntoView({behavior: "smooth"})
    }

    const handleClickContact = () =>{
        document.getElementById("contactSection").scrollIntoView({behavior: "smooth"})
    }



    return (
    
        <section ref={homeRef} id="homeSection">
            <img src={bg} onLoad={()=> {setIsLoaded(true)}} alt="CB background" className={styles.bg} style={{visibility: isLoaded ? "visible":"hidden"}}/>
            <img src={smallBG} className={styles.small} alt="BG" style={{visibility: isLoaded ? "hidden":"visible"}}/>
            <h2 className={styles.h2}>
                Bodhi Property Management
            </h2>
            <h3 className={styles.h3}>Crested Butte, Colorado</h3>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleClickRentals}>RENTALS</button>
                <button className={styles.button} onClick={handleClickContact}>CONTACT</button>
            </div>
        </section>
      
    )
}