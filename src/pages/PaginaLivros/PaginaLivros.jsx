import React from 'react'
import "./PaginaLivros.css"
import { useNavigate } from 'react-router-dom'
function PaginaLivros() {
  const navigate = useNavigate();
  return (
    <div className="container-livros">
        <div className="container-livros-cadastro">
            <h2 className="title-livro">
                Cadastro Livro
            </h2>
            <input className='container-livro-input' type="text" placeholder='Digite o Autor: ' />
            <input className='container-livro-input' type="text" placeholder='Digite o Titulo: ' />
            <input className='container-livro-input' type="text" placeholder='Digite a Descrição: ' />
            <input className='container-livro-input' type="text" placeholder='Digite o Genêro: ' />
            <input className='container-livro-input' type="number" placeholder='Digite a ISBN: ' />
            <input className='container-livro-input' type="text" placeholder='Digite a Editora: ' />
            <input className='container-livro-input' type="date" placeholder='Digite a Data de Publicação: ' />
            <button className="container-livro-button">
            Cadastrar
            </button>
        <button className="container-livro-button" onClick={() => {navigate("/")}}>Voltar </button>

        </div>
    </div>
  )
}

export default PaginaLivros