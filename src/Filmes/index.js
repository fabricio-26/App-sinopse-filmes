import React, { useState } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'

import Detalhes from "../Detalhes";

export default function Filmes({ data }){
    const [visibleModal, setVisibleModal] = useState(false)

    function ModalVisible(){
        if (!visibleModal){
            setVisibleModal(true)
        }else{
            setVisibleModal(false)
        }
    }

    return(
        <View>
            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>

                <Image
                source={{uri: data.foto}}
                style={styles.capa}
                />

                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={ModalVisible}>
                        <Text style={styles.botaoTexto}>LEIA MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal transparent={true} animationType="slide" visible={visibleModal}>
                <Detalhes filme={data} voltar={ModalVisible}/>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#FFF',
        margin: 15,
        elevation: 2
    },
    capa:{
        height: 250,
        zIndex:2
    },
    titulo:{
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    areaBotao:{
        alignItems:'flex-end',
        marginTop: -45,
        zIndex: 3
    },
    botao:{
        width: 100,
        backgroundColor: '#09A6FF',
        opacity:1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    botaoTexto:{
        color: '#fff',
        textAlign:'center'
    }
})