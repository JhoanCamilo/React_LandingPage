import Styles from './NavBar.module.css'
export function NavBar() {
    return(
        <nav className="navbar bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <h1 className="text-light">Logo</h1>
                </a>
                <div>
                    <button className={`btn ${Styles.contact_button}`}>Contact Us</button>
                </div>
            </div>
        </nav>
    )
}