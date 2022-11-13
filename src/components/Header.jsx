import styles from "../styles/Header.module.css";
import logo from "../assets/img/BodhiPMTrans.png";

export default function Header() {
    
    const navLinks = ["Home", "Rentals", "Contact", "About Us"];

    const renderNavLink = (content) => {
        return(
            <ul key={content}>
                <li>
                    <button>{content}</button>
                </li>
            </ul>
        )
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.navContainer}>
                    <img className={styles.logo} src={logo} alt="logo"/>
                    <nav>
                        {navLinks.map(nav => renderNavLink(nav))}
                    </nav>

                </div>
            </div>

        </header>
    )
}