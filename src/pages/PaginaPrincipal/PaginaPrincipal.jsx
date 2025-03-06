import React from 'react';  
import Header from '../../comum/componente/Header/Header';  
import { useNavigate } from 'react-router-dom';  
import "./PaginaPrincipal.css"

function PaginaPrincipal() {  
  const navigate = useNavigate();  

  return (  
    <>  
      <Header />  
      <div className="container-principal">  
        <button className='botaoPrincipal' onClick={() => navigate('/anuncios')}>Cadastro de Anuncios</button>  
        <button className='botaoPrincipal' onClick={() => navigate('/livros')}>Cadastro de Livros</button>  
        <button className='botaoPrincipal' onClick={() => navigate('/users')}>Cadastro de Usuário</button>  
      </div>  
    </>  
  );  
}  

export default PaginaPrincipal;  