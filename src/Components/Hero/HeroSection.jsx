import Styles from './Hero.module.css'
import image from './world_connection.svg'
export function HeroSection({CTA="Call to action", complement="Complement your CTA"}) {
    return(
        <section className={`container-fluid d-block d-md-flex ${Styles.heroContainer}`}>
            <div className={`${Styles.CTA_info}`}>
                <div>
                    <h1 className={Styles.CTA}>{CTA}</h1>
                    <h5>{complement}</h5>
                </div>
            </div>
            <div className={`${Styles.heroImage}`}>
                <img src={image} alt="Conexión global"/>
            </div>
        </section>
    )
}