import React from 'react'
import { Image, StyleSheet, Dimensions } from 'react-native'
import Texto from '../../../componentes/Texto'
import topo from '../../../../assets/topo.png'

export default function Topo() {
    return <>
        <Image style={estilos.topo} source={topo} />
        <Texto style={estilos.titulo}>Detalhes da cesta</Texto>
    </>

}

const width = Dimensions.get('screen').width

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
});