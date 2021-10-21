import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useState } from 'react'
import { Image, View, FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { IPhotos } from '../interfaces/IPhotos';
import { navigateParamList } from '../interfaces/ParamList';

interface FlatListImageProps {
    data:IPhotos[],
    nothingText?: string | null
    navigation: StackNavigationProp<navigateParamList>
}


export const FlatListImage: FC<FlatListImageProps> = ({navigation, data, nothingText = null}) => {
    const [nummberColumns, setnummberColumns] = useState(4)
    return (
        // если массив пуст, то показываем надпись, что любимый фоток нет
        !data.length
        ?<Text style={styles.nothingFavoriteImages}>{nothingText}</Text>
        :
        <FlatList
        numColumns={nummberColumns}
        style={styles.listImage}
        data={data}
        renderItem={({item, index}) => (
            <TouchableOpacity activeOpacity={0.7} 
            onPress={() => navigation.navigate("LookImage", item)}>
                <View style={{position:'relative'}}>
                {item.favorite && <Icon solid name='heart' color='red' size={20} 
                style={[styles.heart,{left: index % nummberColumns !== 0 ?7:0}]}/>}
                <Image
                style={[styles.image,{marginLeft: index % nummberColumns !== 0?7:0}]}
                source={{
                    uri:item.previewURL
                }}/>
                </View>
            </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}/>
    )
}

const styles = StyleSheet.create({
    listImage:{
        marginTop:15, 
        marginHorizontal:15, 
        alignSelf:'center'
    },
    image:{
        width:81,
        height:81,
        borderRadius:10,
        marginTop:5
    },
    heart:{
        position:'absolute',
        bottom:0,
        zIndex:10,
    },
    nothingFavoriteImages: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
    },
})