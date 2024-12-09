import React from 'react';
import { Container } from 'react-bootstrap';

const TeamStory = () => {
    return (
        <Container className="d-flex justify-content-center flex-column align-items-center gap-3">
            <div className="d-flex justify-content-center align-items-center gap-3 flex-column">
                <h2 className="m-0">Historia do clube</h2>
                <p>
                    O Clube de Regatas do Flamengo (mais conhecido simplesmente como 
                    Flamengo, popularmente pelos apelidos de Fla, Mengo e Mengão, e cujo
                     acrônimo é CRF) é uma agremiação poliesportiva brasileira com sede 
                     na cidade do Rio de Janeiro, capital do estado homônimo. Fundado 
                     no bairro do Flamengo para disputas do esporte remo em 17 
                     de novembro de 1895, tornou-se um dos clubes mais 
                     bem-sucedidos e populares do esporte brasileiro, especialmente 
                     pelo futebol. Tem como suas cores tradicionais o vermelho e o 
                     preto e como seus maiores rivais esportivos o Vasco da Gama, o 
                     Fluminense e o Botafogo.
                </p>
                <img src="src\assets\img\story.jpg" alt="" />
            </div>
        </Container>
    );
};

export default TeamStory;

