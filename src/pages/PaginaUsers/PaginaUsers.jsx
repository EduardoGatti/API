import React from 'react'
import "./PaginaUsers.css"
import { useNavigate } from 'react-router-dom'
function PaginaUsers() {
    const navigate = useNavigate();
    return (
        <div className="container-users">
            <div className="container-users-cadastro">

                <div className="container-users-title">
                    Cadastro Usuario
                </div>
                <input type="text" className="container-users-input" placeholder='Digite seu Nome:' />
                <input type="text" className="container-users-input" placeholder='Digite seu Email:' />
                <input type="number" className="container-users-input" placeholder='Digite seu Número:' />
                <button className="container-users-button">
                    Cadastrar-se
                </button>
                <button className='container-users-button' onClick={() => {navigate("/")}}>Voltar</button>

            </div>
        </div>
    )
}

export default PaginaUsers