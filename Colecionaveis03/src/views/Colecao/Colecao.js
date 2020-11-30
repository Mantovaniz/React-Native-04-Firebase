import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import estiloColecao from './estiloColecao';
import ItemLista from '../../components/ItemLista/ItemLista';
import { MaterialIcons } from '@expo/vector-icons';
import { LivroFB } from '../../firebase/livroFB';

function Colecao({ navigation }) {

    const [colecao, setColecao] = useState( [] );

    const livroFb = new LivroFB();

    useEffect(() => {
        livroFb.pegarColecao()
            .orderBy('titulo')
            .onSnapshot((query) => {
                const items = [];
                query.forEach((doc) => {
                    items.push({...doc.data(), id: doc.id});
                });
                setColecao(items);
            });
    }, []);


    const voltar = () => {
        navigation.navigate('Inicial')
    }

    const adicionar = () => {
        navigation.navigate('Item', {item: {}, operacao: 'adicionar'})
    }

    const editar = (item) => {
        navigation.navigate('Item', {item: item, operacao: 'editar'})
    }
    
    return (
        <View style={estiloColecao.container}>

            <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloColecao.texto}>Coleção</Text>
                <TouchableOpacity onPress={adicionar}>
                    <MaterialIcons name="add" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={colecao}
                renderItem={ ({item}) => <ItemLista data={item} detalhe={() => editar(item)}/>}
            />

        </View>
    )
}

export default Colecao;