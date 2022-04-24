import React,{useContext} from 'react';
import {RecetasContext} from '../context/RecetasContext';
import Comidas from './Comidas';
import Receta from './Receta';

const ListaRecetas = () => {

    //extraer las recetas

    const {recetas,consultar} = useContext(RecetasContext);
    return ( 
        
        <div className='row mt-5'>
            {consultar === 'comidas'? 
            recetas.map(receta => (
                <Comidas key={receta.id} receta={receta} />
            ))
            :
            recetas.map(receta=> (
                <Receta key={receta.idDrink}
                        receta={receta}/>
            ))
            }
            
        </div>
     );
}
 
export default ListaRecetas;