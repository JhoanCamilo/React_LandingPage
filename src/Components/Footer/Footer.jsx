import Styles from './Footer.module.css'
import image from './Logo_Personal.svg'
import {IoIosPhonePortrait, IoIosMailOpen, IoLogoGithub} from 'react-icons/io'
export function Footer() {
    return(
        <footer className={`container-fluid justify-content-around align-items-center d-block d-md-flex bg-dark ${Styles.footer}`}>
            <div>
                <p><IoIosPhonePortrait className={Styles.icon}/>+57 310 508 8636</p>
                <p><IoIosMailOpen className={Styles.icon}/>jcamonsalve01@gmail.com</p>
            </div>
            <div className="d-flex justify-content-center"><img src={image} alt="logo" /></div>
        </footer>
    )
}