import { useState, useEffect } from 'react';

function Hook(url) {
  const [pagina, setPagina] = useState(1);
  const [datos, setDatos] = useState([]);
  
  useEffect(() => {
    fetch(`${url}?page=${pagina}`)
    .catch(error => console.log(error))
      .then(response => response.json())
      .then(data => setDatos(data.results))
      
  }, [url, pagina]);
  
  function cambiarPagina(valor) {
    if (valor === 'siguiente' && pagina < 3) {
      setPagina(pagina + 1);
    } else if (valor === 'atras' && pagina > 1) {
      setPagina(pagina - 1);
    }
  }


  return { datos, pagina, cambiarPagina };
}

export default Hook;