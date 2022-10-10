import React from 'react'
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'
import Texto from '../components/Texto'

const width = Dimensions.get('screen').width

function Cesta() {
    return <>
        <Image style={estilos.topo} source={topo} />
        <Texto style={estilos.titulo}>Detalhes da cesta</Texto>

        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta de verduras</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.imagemFazenda} source={logo} />
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>



            <Texto style={estilos.descricao}>Uma cesta com produtos cuidadosamente
                selecionadas para sua cozinha</Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width
    },
    titulo: {
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: 'bold',
        padding: 16

    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold'

    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12

    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2a9f85",
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 42,
        marginTop: 8
    }
});

export default Cesta;
