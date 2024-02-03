import { useEffect, useState, createContext, useContext } from "react";
import Swal from 'sweetalert2'
import './NotificationService.css';

const NotificationContext = createContext({
    showNotification: () => {},
    showConfirmation: () => {}
})

const ConfirmNotification = ({ notificationData }) => {

    Swal.fire({
        title: '¿Estás seguro?',
        text: notificationData.text,
        icon: 'warning',
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: notificationData.confirmButton,
        cancelButtonText: 'Cancelar',
        customClass: {
            confirmButton: 'button confirm',
            cancelButton: 'button cancel',
        },
    }).then((result) => {
        if (result.isConfirmed) {
            notificationData.addAction()
        }
    });
}

const Notification = ({ notificationData }) => {

    const icon = {
        success: 'success',
        error: 'error',
        info: 'info',
        question: 'question',
        warning: 'warning'
    }
    const title = {
        success: 'Vamos!',
        error: 'Error',
        info: 'Información',
        question: 'Pregunta:',
        warning: 'Advertencia'
    }

    useEffect(() => {
        showAlert();
    })

    const showAlert = () => {
        Swal.fire({
            title: title[notificationData.type],
            text: notificationData.text,
            icon: icon[notificationData.type],
            buttonsStyling: true,
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: 'button confirm',
            },
        })
    }
}

export const NotificationProvider = ({children}) => {
    const [notificationData, setNotificationData] = useState({
        type: '',
        text: ''
    })

    const showNotification = (type, text) => {
        setNotificationData({ type, text })
    }

    return(
        <NotificationContext.Provider value={{showNotification}}>
            {notificationData.text && <Notification notificationData={notificationData} />}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}