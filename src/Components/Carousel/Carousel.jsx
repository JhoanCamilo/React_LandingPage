import Styles from './Carousel.module.css'
import idea from './Process.svg'
export function Carousel() {
    if (screen.width >= 768) {
        return(
            <section className='container-fluid'>
                <h3 className={Styles.carouselTitle}>From your <strong className={`${Styles.strongText}`}>idea</strong> to <strong className={`${Styles.strongText}`}>reality</strong></h3>
                <p className='text-center'>If you have an idea to promote your brand with a website, but you don't know how to do it, contact us and we will help you take <strong className={`${Styles.strongText}`}>your business to the next level</strong>.</p>
                <div className={`${Styles.carouselContainer}`}>
                    <img src={idea} className={`${Styles.carouselImage}`} alt="from idea"/>
                </div>
            </section>
        )
    }
    if (screen.width <= 767){
        return(
            <section className='container-fluid'>
                <h3 className={Styles.carouselTitle}>From your <strong className={`${Styles.strongText}`}>idea</strong> to <strong className={`${Styles.strongText}`}>reallity</strong></h3>
                <p className='text-center'>If you have an idea to promote your brand with a website, but you don't know how to do it, contact us and we will help you take <strong className={`${Styles.strongText}`}>your business to the next level</strong>.</p>
                <div className={`d-block ${Styles.carouselContainer}`}>
                    <img src={idea} className={`${Styles.carouselImage}`} alt="from idea"/>
                </div>
            </section>
        )
    }
}