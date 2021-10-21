import React, { FC } from 'react'
import { Alert, Image, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { IPhotos } from '../interfaces/IPhotos';
import { addFavorite, deleteFavorite, removeImage } from '../store/reducers/imageSlice';
import { ButtonsForDelteAndAddFavorite } from './ButtonsForDelteAndAddFavorite';
import { StackNavigationProp } from "@react-navigation/stack";
import { navigateParamList } from '../interfaces/ParamList';

interface params{
    params:IPhotos
}

interface LookImageProps{
    route:params
    navigation: StackNavigationProp<navigateParamList>
}

export const LookImage: FC<LookImageProps> = ({route, navigation}) => {
    const {webformatURL, id, favorite} = route.params

    const dispatch = useDispatch()

    const ChangeFavoriteHandler = () => {
        if(!favorite){
            //на всякий случай, если не отработает корректно приложение
            if(favorite){
                Alert.alert('Произошла ошибка')
                return
            }
            dispatch(addFavorite(id))
            navigation.setParams({
                favorite:true
            })
        }else{
            dispatch(deleteFavorite(id))
            navigation.setParams({
                favorite:false
            })
        }
    }
    const RemoveImgHandler = () => {
        //удаление и переход на главную страницу
        dispatch(removeImage(id))
        navigation.navigate('HomePage')
    }

    return (
        //Заглваня картинка и кнопки
        <View style={styles.ContainerLookImage}>
            <View style={styles.imgContainer}>
                <Image
                source={{
                    uri:webformatURL
                }}
                style={{width:'100%', height:375}}/>
            </View>
            {/* Кнопки добавления в избранноге и удаление */}
            <ButtonsForDelteAndAddFavorite 
            changeFavorite={ChangeFavoriteHandler}
            favorite={favorite} 
            removeImg={RemoveImgHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    ContainerLookImage:{
        flex:1,
        backgroundColor:'#212529',
        alignItems:'center'
    },  
    imgContainer:{
        height:375,
        width:'100%',
        flex:1,
        justifyContent:'center',
    },
})
