import React from 'react'  
import "./PaginaAnuncios.css"  
import { useNavigate } from 'react-router-dom'

function PaginaAnuncios() {  
  const navigate = useNavigate();
  return (  
    <div className="container-anuncios">  
      <div className="container-anuncios-cadastro">  
        <h2 className="title-livro">Cadastro Anuncios</h2>  
        <input className='container-anuncios-input' type="text" placeholder='Digite o titulo: ' />  
        <input className='container-anuncios-input' type="text" placeholder='Digite a Descrição: ' />  
        <button className="container-anuncios-button">Cadastrar</button>  
        <button className="container-anuncios-button" onClick={() => {navigate("/")}}>Voltar </button>
      </div>  
    </div>  
  )  
}  

export default PaginaAnuncios  