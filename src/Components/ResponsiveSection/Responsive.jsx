import Styles from './Responsive.module.css'
import img from './responsive.svg'
export function ResponsiveSection() {
    if (screen.width >= 768) {
        return(
            <section className='container-fluid d-block d-md-flex'>
                <div className={`${Styles.responsiveImg}`}>
                    <img src={img} alt=""/>
                </div>
                <div className={`${Styles.responsiveText}`}>
                    <h3>Responsive web sites for all devices</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae molestiae nobis repudiandae exercitationem commodi deserunt illum blanditiis numquam officiis fugiat! Magni omnis veritatis maxime perspiciatis! Error praesentium quam quaerat quis.</p>
                </div>
            </section>
        )
    }
    if(screen.width <= 767){
        return(
            <section className='container-fluid d-block d-md-flex'>
                <div className={`${Styles.responsiveText}`}>
                    <h3>Responsive web sites for all devices</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae molestiae nobis repudiandae exercitationem commodi deserunt illum blanditiis numquam officiis fugiat! Magni omnis veritatis maxime perspiciatis! Error praesentium quam quaerat quis.</p>
                </div>
                <div className={`${Styles.responsiveImg}`}>
                    <img src={img} alt=""/>
                </div>
            </section>
        )
    }
    
}