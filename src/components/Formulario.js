import React,{useContext,useState} from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';
import Swal from 'sweetalert2';

const Formulario = () => {

    const { categorias,guardarCategorias } = useContext(CategoriasContext);
    const {  buscarRecetas,guardarConsultar } = useContext(RecetasContext);

    const [busqueda,guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    })
    const [tipo,settipo] = useState('');

    //funcion para leer los contenidos del formulario
    const obtenerDatosReceta = (e) =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : [e.target.value]
        })
    }
    
    const changeCategories = (e) =>{
        if(e.target.value==='Comida')
        {
            settipo(e.target.value)
            guardarCategorias([
                {"strCategory":"Main course"},
                {"strCategory":"side dish"},
                {"strCategory":"dessert"},
                {"strCategory":"appetizer"},
                {"strCategory":"salad"},
                {"strCategory":"bread"},
                {"strCategory":"breakfast"},
            ])
        }else{
            settipo('Bebida')
            guardarCategorias([])
        }
    }

    return ( 
        <form
            className="col-12"
            onSubmit={ e => {
                e.preventDefault();
                if(busqueda.nombre ==='' || busqueda.categoria === '')
                {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Debes de llenar todos campos para hacer la busqueda',
                      })
                      return;
                }
                buscarRecetas(busqueda);

                if(tipo === 'Bebida')
                {
                    guardarConsultar('bebidas');
                }else
                {
                    guardarConsultar('comidas')
                }
            }}
        >
            <fieldset className ="text-center">
                <legend>Busca tus Recetas por Categoría o Ingredientes</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="categoria"
                        onChange={changeCategories}>
                            <option value="">-- Seleccione un tipo --</option>
                            <option value='Comida'>Platillos</option>
                            <option value='Bebida'>Bebidas</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar Ingredientes"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-2">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">-- Seleccione Categoría --</option>
                        {categorias.map(categoria => (
                            <option 
                                key={categoria.strCategory} 
                                value={categoria.strCategory}>
                                    {categoria.strCategory}
                            </option>
                        ))}
                    </select>

                </div>

                <div className="">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Busca tu Receta"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;