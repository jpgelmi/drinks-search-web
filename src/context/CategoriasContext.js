import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

//Crear el context
export const CategoriasContexts = createContext();

//Provider donde se encuentran las funciones

const CategoriasProvider = (props) => {
    
    //crear el state del Context
    const[categorias, setCategorias] = useState([])

    //Ejecutar el llamdo a la API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
            
            const categorias = await axios.get(url)
            
            setCategorias(categorias.data.drinks)
        }
        obtenerCategorias()
    }, [])

    return(
        <CategoriasContexts.Provider
            value = {{
              categorias
            }}
        >
            {props.children}
        </CategoriasContexts.Provider>
    )
}
export default CategoriasProvider;