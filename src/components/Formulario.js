import React, {useContext, useState} from 'react';
import { CategoriasContexts } from '../context/CategoriasContext';
import {RecetasContext} from "../context/RecetasContext"

const Formulario = () => {

    const[busqueda, setBusqueda] = useState({
        nombre: "",
        item: ""
    })

    const {categorias} = useContext(CategoriasContexts)
    const {buscarRecetas, setConsultar} = useContext(RecetasContext)

    const obtenerDatosReceta = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    console.log(categorias)

    return (
        <form
            className = "col-12"
            onSubmit = {e => {
                e.preventDefault()
                buscarRecetas(busqueda)
                setConsultar(true)
            }}
        >
            <fieldset className = "text-center">
                <legend>
                    Busca bebidas por categoría o Ingredientes
                </legend>
                <div className = "row">
                    <div className = "col-md-4">
                        <input
                            name = "nombre"
                            className = "form-control"
                            type = "text"
                            placeholder = "Buscar por ingrediente"
                            onChange = {obtenerDatosReceta}
                        />
                    </div>
                    <div className = "col-md-4">
                        <select
                            className = "form-control"
                            name = "categoria"
                            onChange = {obtenerDatosReceta}
                        >
                            <option value = ""> -- Selecciona Categoría </option>
                            {categorias.map(item => (
                                <option
                                    key = {item.strCategory}
                                    value = {item.strCategory}
                                >{item.strCategory}</option>
                            ))}
                        </select>
                    </div>
                    <div className = "col-md-4">
                        <input
                            type = "submit"
                            className = "btn btn-block btn-primary"
                            value = "Buscar Bebida"
                        />
                    </div>
                </div>
            </fieldset>
        </form>
    );
}
 
export default Formulario;