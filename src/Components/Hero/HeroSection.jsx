import Styles from './Hero.module.css'
import image from './world_connection.svg'

export function HeroSection() {
    return(
        <section className={`container-fluid d-block d-md-flex ${Styles.heroContainer}`}>
            <div className={`${Styles.CTA_info}`}>
                <div>
                    <h1 className={Styles.CTA}>Pon tu marca en línea para que el mundo la vea.</h1>
                    <h5>Haga que su marca crezca y sea conocida en todo el mundo, aumente sus ventas con un atractivo visual impactante.</h5>
                </div>
            </div>
            <div className={`${Styles.heroImage}`}>
                <img src={image} alt="Conexión global"/>
            </div>
        </section>
    )
}