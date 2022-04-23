import React,{createContext,useEffect,useState} from 'react';
import axios from 'axios';

// crear el context
export const ModalContex = createContext();

const ModalProvider = (props) => {

    //state del provider
    const [idreceta,guardarIdReceta] = useState(null);

    //state para la receta del cocktail en especifico 
    const [informacion,guardarReceta] = useState({});

    //una vez tenemos una receta llamar a laa api
    useEffect( () => {
        const obtenerReceta = async() => {
            if(!idreceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const resultado = await axios.get(url);
            console.log(resultado.data.drinks[0]);
        }
        obtenerReceta();
    },[idreceta])

    return ( 
        <ModalContex.Provider
            value = {{
                informacion,
                guardarIdReceta
            }}
        >
            {props.children}
        </ModalContex.Provider>
    );
}
 
export default ModalProvider;