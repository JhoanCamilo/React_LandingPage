import Styles from './Carousel.module.css'
import idea from './Process.svg'
export function Carousel() {
    if (screen.width >= 768) {
        return(
            <section className='container-fluid'>
                <h3 className={Styles.carouselTitle}>De tu <strong className={`${Styles.strongText}`}>idea</strong> a la <strong className={`${Styles.strongText}`}>realidad</strong></h3>
                <p className='text-center'>Si tienes una idea para promocionar tu marca con una web, pero no sabes cómo hacerlo, contacta con nosotros y te ayudaremos a <strong className={`${Styles.strongText}`}>llevar tu negocio al siguiente nivel</strong>.</p>
                <div className={`${Styles.carouselContainer}`}>
                    <img src={idea} className={`${Styles.carouselImage}`} alt="from idea"/>
                </div>
            </section>
        )
    }
    if (screen.width <= 767){
        return(
            <section className='container-fluid'>
                <h3 className={Styles.carouselTitle}>De tu <strong className={`${Styles.strongText}`}>idea</strong> a la <strong className={`${Styles.strongText}`}>realidad</strong></h3>
                <p className='text-center'>Si tienes una idea para promocionar tu marca con una web, pero no sabes cómo hacerlo, contacta con nosotros y te ayudaremos a <strong className={`${Styles.strongText}`}>llevar tu negocio al siguiente nivel</strong>.</p>
                <div className={`d-block ${Styles.carouselContainer}`}>
                    <img src={idea} className={`${Styles.carouselImage}`} alt="from idea"/>
                </div>
            </section>
        )
    }
}