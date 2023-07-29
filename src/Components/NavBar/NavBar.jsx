import Styles from './NavBar.module.css'
import img from './Logo_Personal.svg'
const languagesImages = "../../flags/"
export function NavBar() {
    return(
        <nav className="navbar bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <h1 className="text-light"><img src={img} alt="Logo personal" className={`${Styles.navImg}`}/></h1>
                </a>
                {/* <div>
                    <button className={`btn ${Styles.contact_button}`}>Contact Us</button>
                </div> */}
                {/* <div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={`${languagesImages}World.svg`} alt="World"/> Languages selection
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item"><img src={`${languagesImages}Spain.svg`} alt="Spain"/> Spanish</a></li>
                            <li><a className="dropdown-item"><img src={`${languagesImages}USA.svg`} alt="USA" /> English</a></li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </nav>
    )
}