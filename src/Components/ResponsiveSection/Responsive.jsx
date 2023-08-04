import Styles from './Responsive.module.css'
import './Responsive.css'
import img from './responsive.svg'
function Accordion() {
    return(
        <div className="accordion col-12 p-2" id="Accordion">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    1. Mayor alcance
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#Accordion">
                    <div className="accordion-body">
                        Llega a tu audiencia donde quiera que estén. Con una aplicación web responsiva, estarás presente en todos los dispositivos, atrayendo a más usuarios y potenciales clientes.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    2. Experiencia de usuario inigualable
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#Accordion">
                    <div className="accordion-body">
                        Una interfaz optimizada y adaptada al dispositivo garantiza que tus usuarios disfruten de una navegación suave y placentera, lo que aumenta la retención y la satisfacción del cliente.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    3. Impulsa tu visibilidad en los motores de búsqueda
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#Accordion">
                    <div className="accordion-body">
                        Google y otros buscadores favorecen los sitios web responsivos en sus resultados de búsqueda, lo que mejora tu posicionamiento y aumenta el tráfico a tu sitio.  
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    4. Ahorro de costos y tiempo
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#Accordion">
                    <div className="accordion-body">
                        En lugar de desarrollar aplicaciones separadas para cada dispositivo, nuestra solución responsiva te permite mantener una sola versión que se ajusta a todas las pantallas.
                    </div>
                </div>
            </div>
        </div>
    )
}
export function ResponsiveSection() {
    if (screen.width >= 768) {
        return(
            <section className={`container-fluid d-block d-md-flex ${Styles.container}`}>
                <div className={`${Styles.responsiveImg}`}>
                    <img src={img} alt=""/>
                </div>
                <div className={`${Styles.responsiveText}`}>
                    <h3 className='p-2'>Sitios web responsivos <strong className={`${Styles.strongText}`}>para todo dispositivo</strong></h3>
                    <p>En la era actual, la accesibilidad y la experiencia del usuario son fundamentales para el éxito en línea. 
                    Nuestras aplicaciones web responsivas se adaptan automáticamente a cualquier dispositivo, 
                    ya sea un ordenador de sobremesa, una tableta o un smartphone, proporcionando una experiencia fluida y atractiva 
                    independientemente del tamaño de la pantalla.</p>
                     <p>Algunas ventajas de esto son:</p>
                     <Accordion/>
                </div>
            </section>
        )
    }
    if (screen.width <= 767){
        return(
            <section className='container-fluid d-block d-md-flex'>
                <div className={`${Styles.responsiveText}`}>
                    <h3 className='p-2'>Sitios web responsivos <strong className={`${Styles.strongText}`}>para todo dispositivo</strong></h3>
                    <p>En la era actual, la accesibilidad y la experiencia del usuario son fundamentales para el éxito en línea. 
                    Nuestras aplicaciones web responsivas se adaptan automáticamente a cualquier dispositivo, 
                    ya sea un ordenador de sobremesa, una tableta o un smartphone, proporcionando una experiencia fluida y atractiva 
                    independientemente del tamaño de la pantalla.</p>
                     <p>Algunas ventajas de esto son:</p>
                     <Accordion/>
                </div>
                <div className={`${Styles.responsiveImg}`}>
                    <img src={img} alt=""/>
                </div>
            </section>
        )
    }
}