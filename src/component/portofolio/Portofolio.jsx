import React from "react";
import ME from '../../assets/9.png'

const Portofolio = () => {
    return(
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portofolio</h2>
            <div className="container portofolio_container">
                <article className="portofolio_item">
                    <img src={ME} alt="group1" />
                    <h3>Group Project1</h3>
                </article>
            </div>
        </section>
    )
}
export default Portofolio