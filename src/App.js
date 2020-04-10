import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'


function App() {

  const [ categoria, guardarCategoria ] = useState(' ');
  const [ noticias, guardarNoticias ] = useState([]);

  useEffect(() => {

    const API = async() => {

      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=97a3c34979454084ba1c3b89bd8711ea`;
      
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      console.log(noticias)

      guardarNoticias(noticias.articles)
      
    }
    API();
  }, [categoria])


  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />

      <div className="container whiter">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
            noticias={noticias}
        />
      </div>


    </Fragment>
  );
}

export default App;
