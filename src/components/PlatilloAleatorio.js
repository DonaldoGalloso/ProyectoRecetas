import { useEffect, useState } from "react"
import axios from 'axios';

const PlatilloAleatorio = () => {

  const [platilloRamdom, setplatilloRamdom] = useState({})
  const [instrucciones,setinstrucciones] = useState([]);

  useEffect(() => {
    const consultarPlatilloaleatorio = async() => {
      const url = 'https://api.spoonacular.com/recipes/random?number=1&apiKey=2984b70b4d3b46338cf214f2ec4fd517';
      const platillo = await axios.get(url);
      setplatilloRamdom(platillo.data.recipes[0]);
      setinstrucciones(platillo.data.recipes[0].analyzedInstructions[0].steps);
    }

    consultarPlatilloaleatorio();
    
  
  }, [])
  


  return (
    <div className="my-5">
      <h2 className="mplatillo colorprincipal">¿No Sabes que Pedir?</h2>
      <p className="mplatillo font-italic fs-3">Aqui te dejamos una recomendación c:</p>
      <div className="card width150 text-center mx-auto my-2">
        <img src={platilloRamdom.image} className="card-img-top width100" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{platilloRamdom.title}</h5>
          <ul className="text-left">
            {
              instrucciones.map(instruccion => (
                <li key={instruccion.number}>
                  {instruccion.step}
                </li>
              ))
            }
          </ul>
          <a href="#" className="btn btn-primary">Agregar al carrito</a>
        </div>
      </div>
    </div>
  )
}

export default PlatilloAleatorio