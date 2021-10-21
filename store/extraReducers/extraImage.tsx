import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IPhotos } from '../../interfaces/IPhotos'
import { removeImage } from '../reducers/imageSlice'

const API_KEY = '23947034-df221ab48d32949e0387745df'

interface Hits{
    hits:IPhotos[]
}

export const fetchImages = createAsyncThunk(
    'image/fetchImages',
    async function(_, thunkApi){
        try {
            const response = await axios.get<Hits>(`https://pixabay.com/api/?key=${API_KEY}`)
            const {hits} = response.data
            hits.map((page) => {
                return page.favorite = false
            })
            return hits
        } catch (error) {
            return thunkApi.rejectWithValue('IMAGE NOT DOWNLOAD')
        }
    }
)
//Реализация удаления через сервер, если бы он был реален
export const deleteImage = createAsyncThunk(
    'image/deleteImage',
    async function(id: number, {rejectWithValue, dispatch}){
        try {
            const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&id=${id}`,{
                method:"DELETE"
            })
            console.log(response);
            if(!response.ok){
                throw new Error('IMAGE NOT DELETE')
            }
            dispatch(removeImage(id))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)