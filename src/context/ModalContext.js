import React, {
    createContext,
    useEffect,
    useState
} from 'react';

import axios from "axios"

export const ModalContext = createContext();

const ModalProvider = (props) => {
    //state del provider
    const[idreceta, setIdReceta] = useState(null)
    const [info, setReceta] = useState({})

    //Una vez que tenemos una receta
    useEffect(() => {
        const obtenerReceta = async() => {
            if(!idreceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
            
            const resultado = await axios.get(url);

            setReceta(resultado.data.drinks[0])
        }
        obtenerReceta()
    }, [idreceta])


    return (
        <ModalContext.Provider
            value = {{
                info,
                setIdReceta,
                setReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;
