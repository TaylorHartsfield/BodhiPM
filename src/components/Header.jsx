import styles from "../styles/Header.module.css";
import logo from "../assets/img/BodhiPMTrans.png";
import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import { useState } from "react";


export default function Header() {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    function handleClick() {
        setIsNavExpanded(!isNavExpanded)
    }

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
            
                <li key={content}>
                    <button
                    onClick={handleClickNav}
                    className={activeLinkId === content ? styles.activeClass : ""}>
                    {content}
                    </button>
                </li>

        )
    }


    return (
        <header className={styles.header}>
            <div className={styles.container}>
                    <div className={styles.brandName}>
                        <img 
                        className={styles.logo} 
                        src={logo} 
                        alt="logo"
                        onClick={handleClickLogo}/>
                    </div>
                    <div
                        className={
                        isNavExpanded ? 
                        styles.navigationMenuExpanded : 
                        styles.navigationMenu}>
                    <button className={styles.hamburger}
                        onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} stroke="currentColor" 
                            className="w-6 h-6">
                            <path strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                  
                        <ul>
                            {navLinks.map(nav => renderNavLink(nav))}
                        </ul>
                    </div>    
            </div>
        </header>
    )
}