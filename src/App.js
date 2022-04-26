import React from 'react';
import Formulario from './components/Formulario';
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ListaRecetas from './components/ListaRecetas';
import ModalProvider from './context/ModalContext';
import PlatilloAleatorio from './components/PlatilloAleatorio';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>

          
          <div className="container mt-5">
            <div className="row">
              <Formulario/>
            </div>
             <ListaRecetas/>
             <PlatilloAleatorio/>
          </div>
          
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
