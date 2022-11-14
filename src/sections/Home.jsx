import { useNav } from "../hooks/useNav";

import styles from "../styles/Home.module.css";

export default function Home() {

    const homeRef = useNav("Home");

  
    const handleClickRentals = () =>{
        document.getElementById("rentalsSection").scrollIntoView({behavior: "smooth"})
    }

    const handleClickContact = () =>{
        document.getElementById("contactSection").scrollIntoView({behavior: "smooth"})
    }

    return (
        
        <section ref={homeRef} id="homeSection" className={styles.homeSection}>
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