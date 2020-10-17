import React, {
    createContext,
    useEffect,
    useState
} from 'react';

import axios from "axios"

export const ModalContext = createContext();

const ModalProvider = () => {
    //state del provider
    const[idreceta, setIdReceta] = useState(null)

    //Una vez que tenemos una receta

    useEffect(() => {
        const obtenerReceta = async() => {

        }
        obtenerReceta()
    }, [idreceta])


    return (
        <ModalContext.Provider
            value = {{
                setIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;
