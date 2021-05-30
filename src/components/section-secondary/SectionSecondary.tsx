import React from "react";
import { useContext } from 'react';
import MessagesContext from '../../contexts/MessagesContext';

const SectionSecondary = () => {
    const ctx = useContext(MessagesContext);
    const messagesLength = ctx.messages.length;

    return (
        <div className="section-primary">
            <div className="container">
                <h3>Tienes {messagesLength} mensajes (sección secundaria)</h3>

                <div className="list-messages">
                    {
                        messagesLength > 0 ? 
                            ctx.messages.map((item, index) => (
                                <div key={index} className="card mb-2">
                                    <div className="card-body">
                                        <h5 className="mb-0">{item}</h5>
                                    </div>
                                </div>
                            )) : 
                        
                        <div className="alert alert-info"><strong>Lo sentimos:</strong> No hay mensajes para mostrar.</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default SectionSecondary;
