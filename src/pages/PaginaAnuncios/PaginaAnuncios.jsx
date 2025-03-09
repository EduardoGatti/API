import React, { useState } from 'react';
import "./PaginaAnuncios.css";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ServicoAnuncio from '../../comum/servicos/ServicoAnuncio';

const servicoAnuncio = new ServicoAnuncio();
function PaginaAnuncios() { 
  const [titleAnuncio, setTitleAnuncio] = useState("");
  const [bodyAnuncio, setBodyAnuncio] = useState("");
  const navigate = useNavigate();


  const addAnuncio = async () => {
    try {

      if (!titleAnuncio || !bodyAnuncio) {
        toast.error("Preencha todos os campos!");
        return;
      }


      const anuncio = {
        title: titleAnuncio,
        body: bodyAnuncio,
      };

      const response = await servicoAnuncio.addAnuncio(anuncio);
      if (response.status === 200) {
        toast.success("Anúncio cadastrado com sucesso!");
        navigate("/");  // Redireciona para a página principal
      } else {
        toast.error("Erro inesperado ao salvar o anúncio.");
      }

    } catch (error) {
      console.error(error);
      toast.error(error.response?.data || "Erro ao salvar o anúncio.");
    }
  }

  return (  
    <div className="container-anuncios">  
      <div className="container-anuncios-cadastro">  
        <h2 className="title-livro">Cadastro Anúncios</h2>  
        <input
          className='container-anuncios-input'
          type="text"
          placeholder='Digite o título: '
          value={titleAnuncio}
          onChange={(e) => setTitleAnuncio(e.target.value)}
        />  
        <input
          className='container-anuncios-input'
          type="text"
          placeholder='Digite a Descrição: '
          value={bodyAnuncio}
          onChange={(e) => setBodyAnuncio(e.target.value)}
        />  
        <button className="container-anuncios-button" onClick={addAnuncio}>Cadastrar</button>  
        <button className="container-anuncios-button" onClick={() => {navigate("/")}}>Voltar</button>
      </div>  
    </div>  
  );
}  

export default PaginaAnuncios;
