import logo from '../../assets/logo.png'
import tomate from '../../assets/frutas/Tomate.png'
import brocolis from '../../assets/frutas/Brócolis.png'

const cesta = {
    topo: {
        titulo: "Detalhes da cesta"
    },
    detalhes: {
        nome: "Cesta de verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos cuidadosamente selecionadas para sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar"
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate
            },
            {
                nome: "Brócolis",
                imagem: brocolis
            }
        ]
    }
}

export default cesta;