import Styles from './Carousel.module.css'
import idea from './idea.svg'
import completed from './completed.svg'
export function Carousel() {
    if (screen.width >= 768) {
        return(
            <section className='container-fluid'>
                <h3 className={Styles.carouselTitle}>From your <strong className={`${Styles.strongText}`}>idea</strong> to <strong className={`${Styles.strongText}`}>reallity</strong></h3>
                <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ipsum, libero consectetur consequatur ad maiores? Distinctio cum id nobis, nemo qui consectetur vero, ducimus soluta impedit iste fuga aspernatur officia!</p>
                <div className={`${Styles.carouselContainer}`}>
                    <img src={idea} className={`${Styles.carouselImage}`} alt="from idea"/>
                    <img src={completed} className={`${Styles.carouselImage}`} alt="completed product"/>
                </div>
            </section>
        )
    }
    if (screen.width <= 767){
        return(
            <section className='container-fluid'>
                <h3 className={Styles.carouselTitle}>From your <strong className={`${Styles.strongText}`}>idea</strong> to <strong className={`${Styles.strongText}`}>reallity</strong></h3>
                <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ipsum, libero consectetur consequatur ad maiores? Distinctio cum id nobis, nemo qui consectetur vero, ducimus soluta impedit iste fuga aspernatur officia!</p>
                <div className={`d-block ${Styles.carouselContainer}`}>
                    <img src={idea} className={`${Styles.carouselImage}`} alt="from idea"/>
                </div>
            </section>
        )
    }
}