import { useState } from 'react'
import classes from './OrderForm.module.css'
import { useNotification } from '../../notification/NotificationService';

const OrderForm = ({ onCreate }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const { showNotification } = useNotification()
    const [formSubmitted, setFormSubmitted] = useState(false)

    useTitle(true, `ONE PIECE | Generar Orden`, []);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormSubmitted(true)

        if (!name || !phone || !email) {
            showNotification('error', 'Debe completar todos los campos')
            return
        }

        const userData = {
            name,
            phone,
            email,
        };

        onCreate(userData)
    }

    return (
        <>
            <section className={`container ${classes.contacto}`}>
                <form className={classes.formulario} onSubmit={handleSubmit}>

                    <h3>Completa todos los campos para generar la orden</h3>

                    <div className={classes.contenedorContacto}>
                        <div className={classes.datos}>
                            <label>Nombre:</label>

                            <input type="text" placeholder="Nombre" value={name} onChange={handleNameChange} />
                        </div>

                        <div className={classes.datos}>
                            <label>Teléfono:</label>
                            <input type="tel" pattern="[0-9]*" placeholder="Teléfono" value={phone} onChange={handlePhoneChange} />
                        </div>

                        <div className={classes.datos}>
                            <label>E-mail:</label>
                            <input type="email" placeholder="E-mail" value={email} onChange={handleEmailChange} />
                        </div>
                    </div>

                    <input type="submit" value='Generar Orden' className={classes.enviar} />

                </form>
            </section>
        </>
    )
}

export default OrderForm