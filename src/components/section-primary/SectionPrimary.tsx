import React from "react";
import ContactForm from "../contact-form/ContactForm";

const SectionPrimary = () => {
    return (
        <div className="section-primary mb-5">
            <div className="container">
                <h3>Deja tu mensaje (sección principal)</h3>

                <ContactForm></ContactForm>
            </div>
        </div>
    );
}

export default SectionPrimary;
