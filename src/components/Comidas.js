import React,{useContext, useState} from 'react';
import { ModalContex } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Comidas = ({receta}) => {

  //configuracion del modal
  const[ modalStyle] = useState(getModalStyle);
  //cuando abre o cierra este modal
  const [open,setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () =>{
    setOpen(true);
  }

  const handleClose = () =>{
    setOpen(false);
  }

  //extraer los valores del context
    const {informacion,guardarIdReceta,guardarConsultar,infocomida} = useContext(ModalContex);

    return (
        <div className="col-md-4 mb-3">
          <div className="card">
              <h2 className="card-header text-center">{receta.title}</h2>

              <img className="card-img-top" src={receta.image}
                   alt={`Imagen de ${receta.title}`}/>

              <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-block btn-primary"
                    onClick= {() => {
                      guardarConsultar('comida')
                      guardarIdReceta(receta.id);
                      handleOpen();
                    }}
                  >
                    Ver Receta
                  </button>
                  <Modal
                    open={open}
                    onClose={() => {
                      guardarIdReceta(null);
                      handleClose();
                    }}
                  >
                    <div style={modalStyle} className={classes.paper}>
                      <h2>{receta.title}</h2>
                      <h3 className="mr-4">Instrucciones</h3>
                      {
                        infocomida.map(paso => (
                          <p>{paso.step}</p>
                        ))
                      }
                      
                      
                    </div>
                  </Modal>
              </div>
          </div>
        </div>
      );
}
 
export default Comidas;