import Style from './Form.module.css'
import {IoIosSend} from 'react-icons/io'
export function ContactForm() {
    return(
        <section className='container-fluid'>
            <h1 className={`${Style.contactTitle}`}>Let's <strong className={`${Style.strongText}`}>make something great</strong></h1>
            <form action="" className={`container ${Style.formContainer}`}>
                <div className={`${Style.basicInfo}`}>
                    <div className="col-12">
                        <label htmlFor="userName" className="form-label">Your name or company name:</label>
                        <input type="text" className="form-control" id="userName"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">Email address:</label>
                    <input type="email" className="form-control" id="userEmail" placeholder="name@example.com"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userProject" className="form-label">Tell us about your project</label>
                    <div id="emailHelp" className="form-text">Add a <strong>brief description</strong> of the project you have in mind.</div>
                    <textarea className="form-control" id="userProject" rows="3"></textarea>
                </div>
                <button className={`btn ${Style.sendBtn}`}>Send <IoIosSend/></button>
            </form>
        </section>
    )
}
