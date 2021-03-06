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

const Receta = ({receta}) => {

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
    const {informacion,guardarIdReceta,guardarConsultar} = useContext(ModalContex);

    return (
        <div className="col-md-4 mb-3">
          <div className="card">
              <h2 className="card-header text-center">{receta.strDrink}</h2>

              <img className="card-img-top" src={receta.strDrinkThumb}
                   alt={`Imagen de ${receta.strDrink}`}/>

              <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-block btn-primary"
                    onClick= {() => {
                      guardarIdReceta(receta.idDrink);
                      handleOpen();
                    }}
                  >
                    Ver Receta
                  </button>
                  <Modal
                    open={open}
                    onClose={() => {
                      guardarConsultar('bebida');
                      guardarIdReceta(null);
                      handleClose();
                    }}
                  >
                    <div style={modalStyle} className={classes.paper}>
                      <h2>{informacion.strDrink}</h2>
                      <h3 className="mr-4">Instrucciones</h3>
                      <p>{informacion.strInstructions}</p>
                      <img className="img-fluid my-4" src={informacion.strDrinkThumb}/>
                    </div>
                  </Modal>
              </div>
          </div>
        </div>
      );
}
 
export default Receta;