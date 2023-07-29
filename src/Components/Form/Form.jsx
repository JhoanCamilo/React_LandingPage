import Style from './Form.module.css'
import {IoIosSend} from 'react-icons/io'
export function ContactForm() {
    return(
        <section className={`container-fluid ${Style.formContainer}`}>
            <h1 className={`${Style.contactTitle}`}>Hagamos <strong className={`${Style.strongText}`}>algo grandioso</strong></h1>
            <form action="" className={`container ${Style.formContainer}`}>
                <div className={`${Style.basicInfo}`}>
                    <div className="col-12">
                        <label htmlFor="userName" className="form-label">Tu nombre o el de tu negocio:</label>
                        <input type="text" className="form-control" id="userName"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">Dirección de Email:</label>
                    <input type="email" className="form-control" id="userEmail" placeholder="name@example.com"/>
                    <div id="emailHelp" className="form-text">No compartiremos tu correo con nadie más.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userProject" className="form-label">Cuentanos sobre tu proyecto</label>
                    <div id="emailHelp" className="form-text">Danos una <strong>breve descripción</strong> del proyecto que tienes en mente.</div>
                    <textarea className="form-control" id="userProject" rows="3"></textarea>
                </div>
                <button className={`btn ${Style.sendBtn}`}>Enviar <IoIosSend/></button>
            </form>
        </section>
    )
}
