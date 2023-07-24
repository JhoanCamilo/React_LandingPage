import Styles from './Hero.module.css'
import image from './world_connection.svg'
export function HeroSection() {
    return(
        <section className={`container-fluid d-block d-md-flex ${Styles.heroContainer}`}>
            <div className={`${Styles.CTA_info}`}>
                <div>
                    <h1 className={Styles.CTA}>Put your brand online for the world to see</h1>
                    <h5>Make your brand grow and be known worldwide, increase your sales with a visually powerful appeal.</h5>
                </div>
            </div>
            <div className={`${Styles.heroImage}`}>
                <img src={image} alt="Conexión global"/>
            </div>
        </section>
    )
}