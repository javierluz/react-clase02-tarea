import { useState } from "react";
// import { useContext } from 'react';
// import MessagesContext from '../../contexts/MessagesContext';

const ConstantForm = () => {
    const [message, setMessage] = useState<string[]>([])
    // const { messages, setMessages } = useContext(MessagesContext);

    const handleChange = (event: any) => {
        const value = event.target.value;
        setMessage(value);
    }
    const handleClick = (event: any) => {
        alert(`El mensaje a enviar es: ${message}`);
        // const value = event.target.value;
        // setMessages(value);
    }

    return (
        <div className="contact-form">
            <div className="form-group mb-2">
                <textarea className="form-control" name="message" id="message" value={message} onChange={handleChange} placeholder="Escribe un mensaje...">
                </textarea>
            </div>
            <div className="form-group">
                <button type="submit" onClick={handleClick} className="btn btn-primary">Enviar</button>
            </div>
        </div>
    );
}

export default ConstantForm;
