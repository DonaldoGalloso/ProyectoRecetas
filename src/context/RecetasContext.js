import React , {createContext,useState,useEffect} from 'react';
import axios from 'axios';
export const RecetasContext = createContext();


const RecetasProvider = (props) => {

    const [recetas,guardarRecetas] = useState([]);
    const [busqueda,buscarRecetas] = useState({
        nombre:'',
        categoria:''
    });
    const [consultar,guardarConsultar] = useState('');

    const {nombre,categoria} = busqueda;

    useEffect (() =>{
        if(consultar === 'bebidas'){
            const obtenerBebidas = async() => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                const resultado = await axios.get(url);
                // console.log(resultado.data.drinks);
                guardarRecetas(resultado.data.drinks);
            }
            obtenerBebidas();
        }
        if(consultar === 'comidas'){
            const obtenerPlatillos = async() => {
            const url =`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${nombre}&number=10&apiKey=2984b70b4d3b46338cf214f2ec4fd517&type=${categoria}`;
                const resultado = await axios.get(url);
                //console.log(resultado.data.results);
                guardarRecetas(resultado.data.results);
            }
            obtenerPlatillos();
        }
        
    },[busqueda])

    return ( 
        <RecetasContext.Provider
            value={{buscarRecetas,guardarConsultar,recetas,consultar}}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;