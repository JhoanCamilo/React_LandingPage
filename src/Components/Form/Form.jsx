import { useRef } from 'react'
import Style from './Form.module.css'
import './librariesStyles.css'
import {IoIosSend} from 'react-icons/io'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'


export function ContactForm(){
    const form = useRef();
    const userName = useRef();
    const userEmail = useRef();
    const userProject = useRef();

    function sendMail(event) {
        event.preventDefault()

        const serviceID = 'service_0cd9ats'
        const templateID = 'template_9j793zd'
        const publicKey = 'dQe9zo4wqnUVMDdj7'
        
        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: 'Genial!',
                    text: 'Nos comunicaremos contigo en breve',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                })
            }, (err) => {
                Swal.fire({
                    title: 'Oops!',
                    text: 'Algo salió mal, lo solucionaremos pronto.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                })
            })

        userName.current.value = '';
        userEmail.current.value = '';
        userProject.current.value = '';
    }
    return(
        <section className={`container-fluid ${Style.formContainer}`}>
            <h1 className={`${Style.contactTitle}`}>Hagamos <strong className={`${Style.strongText}`}>algo grandioso</strong></h1>
            <form action="" className={`container ${Style.formContainer}`} ref={form} onSubmit={sendMail}>
                <div className={`${Style.basicInfo}`}>
                    <div className="col-12">
                        <label htmlFor="userName" className="form-label">Tu nombre o el de tu negocio:</label>
                        <input type="text" className="form-control" id="userName" name='userName' ref={userName}/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">Correo electrónico:</label>
                    <input type="email" className="form-control" id="userEmail" placeholder="name@example.com" name='userEmail' ref={userEmail}/>
                    <div id="emailHelp" className="form-text">No compartiremos tu correo con nadie más.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userProject" className="form-label">Cuentanos sobre tu proyecto</label>
                    <div id="ProjectDesc" className="form-text">Danos una <strong>breve descripción</strong> del proyecto que tienes en mente.</div>
                    <textarea className="form-control" id="userProject" rows="3" name='userProject' ref={userProject}></textarea>
                </div>
                <button className={`btn ${Style.sendBtn}`} id='SendButton' type='submit'>Enviar <IoIosSend/></button>
            </form>
        </section>
    )
}
