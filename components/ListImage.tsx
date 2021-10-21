
import React, { FC, useEffect} from 'react'
import { ActivityIndicator, Alert,} from 'react-native'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { navProps } from '../interfaces/NavProps'
import { fetchImages } from '../store/extraReducers/extraImage'
import { FlatListImage } from './FlatListImage'


export const ListImage: FC<navProps> = ({navigation}) => {
    
    const dispatch = useAppDispatch()
    const {images: photos, status, error} = useAppSelector(state => state.img)

    useEffect(() => {
        dispatch(fetchImages())
        // dispatch({type: sagaActions.FETCH_IMG_SAGA})
    },[])

    return (
        <>
            {status === 'rejected' && Alert.alert(error)}
            {status === 'loading' && <ActivityIndicator size="large"/>}
            <FlatListImage data={photos} navigation={navigation}/>
        </>
    )
}