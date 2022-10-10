import React from 'react'
import { Image, StyleSheet, View } from 'react-native';
import Detalhes from './componentes/Detalhes';
import Topo from './componentes/Topo';

function Cesta() {
    return <>
        <Topo />

        <View style={estilos.cesta}>
            <Detalhes />
        </View>
    </>
}

const estilos = StyleSheet.create({

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },

});

export default Cesta;
