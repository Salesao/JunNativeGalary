import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPhotos } from '../../interfaces/IPhotos';
import { deleteImage, fetchImages } from '../extraReducers/extraImage';

interface IImages {
    images:IPhotos[],
    favoriteImage:IPhotos[],
    status: null | string,
    error: null | string
}

const initialState: IImages = {
    images:[],
    favoriteImage:[],
    status:null,
    error:null
}

const setError = (state, {payload}: PayloadAction<string>) => {
    state.status = 'rejected'
    state.error = payload
}

const imageSlice = createSlice({
    name:"image",
    initialState,
    reducers:{
        addFavorite(state, {payload}: PayloadAction<number>){
            const findImage = state.images.find(img => img.id === payload)
            findImage.favorite = true
            state.favoriteImage.push(findImage)
        },
        deleteFavorite(state, {payload}: PayloadAction<number>){
            const findFavoriteImg = state.images.find(Img => Img.id === payload)
            findFavoriteImg.favorite = false
            state.favoriteImage = state.favoriteImage.filter(favImg => favImg.id !== payload)
        },
        removeImage(state, {payload}: PayloadAction<number>){
            //проверям пустой ли массив с избранным, если нет, то проходимся по нему, ища action
            const favImgs = state.favoriteImage.length && 
            state.favoriteImage.find(img => img.id === payload)
            //если наш id от action равен с id из избранных изображений, то удаляем изображение из массива 
            if(payload === favImgs.id){
                state.favoriteImage = state.favoriteImage.filter(favImg => favImg.id !== payload)
            }
            //удаление из обычного массива
            state.images = state.images.filter(img => img.id !== payload)
        },
        fetchSagaFulfilled(state, {payload}: PayloadAction<IPhotos[]>){
            state.status = 'filfilled'
            state.images = payload
        },
        fetchSagaPending(state){
            state.status = 'loading'
            state.error = null
        },
        RejectedSaga(state, {payload}: PayloadAction<string>){
            state.status = 'rejected'
            state.error = payload
        },
    },
    //как по мне легче использовать createAsynkThunk, более понятный асинхронный процесс
    extraReducers:{
        [fetchImages.fulfilled.type]: (state, {payload}: PayloadAction<IPhotos[]>) => {
            state.status = 'fulfilled'
            state.error = null
            state.images = payload
        },
        [fetchImages.pending.type]:(state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchImages.rejected.type]: (state, {payload}: PayloadAction<string>) => {
            state.status = 'rejected'
            state.error = payload
        },
        [deleteImage.rejected.type]: setError
    }
})

export const imageState = state => state.img
export const {addFavorite, deleteFavorite, removeImage, fetchSagaFulfilled, fetchSagaPending, RejectedSaga} = imageSlice.actions
export default imageSlice.reducer