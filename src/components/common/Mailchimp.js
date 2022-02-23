import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

const MailchimpComponent = () => {
    const [name, setName] = useState(``);
    const [email, setEmail] = useState(``);
    const [message, setMessage] = useState(`Únete a nuestro newsletter`);
    const [text, setText] = useState(
        `Recibe nuestro contenido y libérate del estrés del trabajo`
    );

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addToMailchimp(email, { NOMBRE: name });
        setMessage(`¡Gracias por suscribirte ${name}!`);
        setText(`Revisa tu bandeja de entrada y confirma la suscripción ⭐️`);
        setName(``);
        setEmail(``);
    };

    return (
        <>
            <h3>{message}</h3>
            <p>{text}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChangeName}
                    placeholder="Nombre (sin apellidos)"
                    name="name"
                    value={name}
                />
                <input
                    type="email"
                    onChange={handleChangeEmail}
                    placeholder="Correo electrónico"
                    name="email"
                    value={email}
                />
                <input type="submit" value="¡Me uno!" />
                <p>
                    <small>
                        Puedes darte de baja en cualquier momento, sin
                        resentimientos
                    </small>
                </p>
            </form>
        </>
    );
};

export default MailchimpComponent;
