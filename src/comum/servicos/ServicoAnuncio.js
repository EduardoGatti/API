class ServicoAnuncio {
    addAnuncio(anuncio) {
      return instaciaApi.post('/anuncio', anuncio);
    }
  }
  
  export default ServicoAnuncio;