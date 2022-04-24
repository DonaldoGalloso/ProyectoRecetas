import React,{createContext,useEffect,useState} from 'react';
import axios from 'axios';

// crear el context
export const ModalContex = createContext();

const ModalProvider = (props) => {

    //state del provider
    const [idreceta,guardarIdReceta] = useState(null);

    //state para la receta del cocktail en especifico 
    const [informacion,guardarReceta] = useState({});

    // state para receta de comida
    const [infocomida,setinfocomida] = useState([]);

    //state para saber a que api hacer la petición
    const [consultar,guardarConsultar] = useState('');

    //una vez tenemos una receta llamar a laa api
    useEffect( () => {
        if(consultar==='bebida')
        {
            const obtenerReceta = async() => {
                if(!idreceta) return;
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
                const resultado = await axios.get(url);
                guardarReceta(resultado.data.drinks[0]);
                console.log(resultado.data.drinks);
            }
            obtenerReceta();
        }
        if(consultar==='comida')
        {
            const obtenerReceta = async() => {
                if(!idreceta) return;
                const url = `https://api.spoonacular.com/recipes/${idreceta}/information?includeNutrition=false&apiKey=2984b70b4d3b46338cf214f2ec4fd517`;
                const resultado = await axios.get(url);
                //guardarReceta(resultado.data.drinks[0]);
                setinfocomida(resultado.data.analyzedInstructions[0].steps)
                //console.log(resultado.data.analyzedInstructions[0].steps);
            }
            obtenerReceta();
            //console.log('aqui vamos a devolver el valor ',idreceta);
            console.log('resultado de conuslta',infocomida);
        }

        
    },[idreceta])

    return ( 
        <ModalContex.Provider
            value = {{
                informacion,
                guardarIdReceta,
                guardarConsultar,
                infocomida
            }}
        >
            {props.children}
        </ModalContex.Provider>
    );
}
 
export default ModalProvider;