import React, {Fragment} from 'react';
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListaRecetas from "./components/ListaRecetas"
import styles from "./Footer.module.css"

import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalContext from "./context/ModalContext"
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
        <Header/>
          <div className = "container mt-5">
            <div className = "row">  
              <Formulario/>
            </div>
              <ListaRecetas/>
            <footer
              className = {styles.footer}
            >
              Juan Pablo Gelmi /@jpgelmi
            </footer>
          </div>

        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
