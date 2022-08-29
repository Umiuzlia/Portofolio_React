import React from "react";
import './contact.css'

const Contact = () => {
    return(
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_options">
                            <h4>Email</h4>
                            <h5>umi99kirei@gmail.com</h5>
                            <a href="mailto:umi99kirei@gmail.com">Send a Massage</a>
                    </article>
                    <article className="contact_options">
                            <h4>Instagram</h4>
                            <h5>Miumy2805</h5>
                            <a href="https:www.instagram.com/miumy2805/">Send a Massage</a>
                    </article>
                    <article className="contact_options">
                            <h4>WhatsApp</h4>
                            <h5>085 337 262 535</h5>
                            <a href="https://www.whatsapp.com/085337262535">Send a Massage</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="text" name="Email" placeholder="Your Email" required/>
                    <textarea type="text" name="message" placeholder="Your Message"></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact