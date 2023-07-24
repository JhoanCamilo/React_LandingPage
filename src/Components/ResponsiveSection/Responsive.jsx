import Styles from './Responsive.module.css'
import img from './responsive.svg'
function Accordion() {
    return(
        <div className="accordion col-12 p-2" id="Accordion">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    1. Greater reach
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#Accordion">
                    <div className="accordion-body">
                        Reach your audience wherever they are. With a responsive web application, you will be present on all devices, attracting more users and potential customers.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    2. Unparalleled user experience
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#Accordion">
                    <div className="accordion-body">
                        An optimized and device-friendly interface ensures that your users enjoy a smooth and pleasant navigation, which increases customer retention and satisfaction.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    3. Boost your visibility in search engines
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#Accordion">
                    <div className="accordion-body">
                        Google and other search engines favor responsive websites in their search results, which improves your ranking and increases traffic to your site.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    4. Cost and time savings
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#Accordion">
                    <div className="accordion-body">
                        Instead of developing separate applications for each device, our responsive solution allows you to maintain a single version that fits all screens.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    5. Easy updates
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#Accordion">
                    <div className="accordion-body">
                        With a single code base, updates and changes are implemented quickly and easily, allowing you to keep your application up to date in the competitive digital world.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    6. Compatibility with the latest technologies
                </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#Accordion">
                    <div className="accordion-body">
                        Our responsive web applications are built using the latest best practices and technologies, ensuring that you are at the forefront of digital innovation.
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
                    <h3>Responsive web sites <strong className={`${Styles.strongText}`}>for all devices</strong></h3>
                    <p>In today's age, accessibility and user experience are critical to online success. Our responsive web applications
                     automatically adapt to any device, whether it's a desktop computer, tablet or smartphone, providing a fluid and 
                     engaging experience regardless of screen size.</p>
                     <p>Some advantages of this are:</p>
                     <Accordion/>
                </div>
            </section>
        )
    }
    if (screen.width <= 767){
        return(
            <section className='container-fluid d-block d-md-flex'>
                <div className={`${Styles.responsiveText}`}>
                    <h3>Responsive web sites <strong className={`${Styles.strongText}`}>for all devices</strong></h3>
                    <p>In today's age, accessibility and user experience are critical to online success. Our responsive web applications
                     automatically adapt to any device, whether it's a desktop computer, tablet or smartphone, providing a fluid and
                     engaging experience regardless of screen size.</p>
                     <p>Some advantages of this are:</p>
                     <Accordion/>
                </div>
                <div className={`${Styles.responsiveImg}`}>
                    <img src={img} alt=""/>
                </div>
            </section>
        )
    }
}