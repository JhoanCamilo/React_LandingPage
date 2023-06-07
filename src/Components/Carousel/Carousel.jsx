import Styles from './Carousel.module.css'
import idea from './idea.svg'
import process from './process.svg'
import completed from './completed.svg'
export function Carousel() {
    return(
        <section className='container-fluid'>
            <h3 className={Styles.carouselTitle}>From your <strong className={`${Styles.strongText}`}>idea</strong> to <strong className={`${Styles.strongText}`}>reallity</strong></h3>
            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ipsum, libero consectetur consequatur ad maiores? Distinctio cum id nobis, nemo qui consectetur vero, ducimus soluta impedit iste fuga aspernatur officia!</p>
            <div id="carouselExampleInterval" className={`carousel slide ${Styles.carouselContainer}`} data-bs-ride="carousel">
                <div className={`carousel-inner ${Styles.carouselImages}`}>
                    <div className={`carousel-item active`} data-bs-interval="2000">
                        <img src={idea} className={`${Styles.carouselImage}`} alt="from idea"/>
                    </div>
                    <div className={`carousel-item`} data-bs-interval="2000">
                        <img src={process} className={`d-block ${Styles.carouselImage}`} alt="process"/>
                    </div>
                    <div className={`carousel-item`} data-bs-interval="2000">
                        <img src={completed} className={`d-block ${Styles.carouselImage}`} alt="completed product"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}