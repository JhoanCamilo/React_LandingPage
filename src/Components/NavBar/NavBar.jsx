import Styles from './NavBar.module.css'
import img from './Logo_Personal.svg'
export function NavBar() {
    return(
        <nav className="navbar bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <h1 className="text-light"><img src={img} alt="Logo personal" className={`${Styles.navImg}`}/></h1>
                </a>
                <div>
                    <button className={`btn ${Styles.contact_button}`}>Contact Us</button>
                </div>
            </div>
        </nav>
    )
}