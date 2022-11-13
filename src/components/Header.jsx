import styles from "../styles/Header.module.css";
import logo from "../assets/img/BodhiPMTrans.png";
import { useContext } from "react";
import { NavContext } from "../context/NavContext";

export default function Header() {

    const { activeLinkId } = useContext(NavContext);
    
    const navLinks = ["Home", "Rentals", "About Us", "Contact"];

    const handleClickLogo = () => {
        document.getElementById("homeSection").scrollIntoView({behavior: "smooth"})
    }

    const renderNavLink = (content) => {
        
        const scrollToId = `${content.toLowerCase()}Section`
    

        const handleClickNav = () => {
            document.getElementById(scrollToId).scrollIntoView({behavior: "smooth"})
        }



        return(
            <ul key={content}>
                <li>
                    <button
                    onClick={handleClickNav}
                    className={activeLinkId === content ? styles.activeClass : ""}>
                    {content}
                    </button>
                </li>
            </ul>
        )
    }


    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.navContainer}>
                    <img className={styles.logo} src={logo} alt="logo"
                    onClick={handleClickLogo}/>
                    <nav>
                        {navLinks.map(nav => renderNavLink(nav))}
                    </nav>

                </div>
            </div>

        </header>
    )
}