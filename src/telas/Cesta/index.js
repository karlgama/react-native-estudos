import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import Texto from '../../componentes/Texto';
import Detalhes from './componentes/Detalhes';
import Topo from './componentes/Topo';
import Item from './item';

function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                    </View>
                    <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                </>
            }}
        />

    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    titulo: {
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
        paddingLeft: 16
    },
});

export default Cesta;
