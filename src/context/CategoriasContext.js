import axios from 'axios';
import React, {createContext,useState,useEffect} from 'react';

//crear el context
export const CategoriasContext = createContext();
//provider es donde se escuentran las funciones y state
const CategoriasProvider = (props) => {
    // crear el state del context
    const [categorias,guardarCategorias] = useState([]);
    //ejecutar el llamado a la api
    useEffect(()=>{
        const obtenerCategorias = async()=>{
            const url= 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const categorias = await axios.get(url);
            guardarCategorias(categorias.data.drinks);
        }
        if (categorias.length === 0)
        {
            obtenerCategorias();
        }

        
    },[categorias]);

    return (
        <CategoriasContext.Provider
            value={{
               categorias , guardarCategorias
            }}>
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;