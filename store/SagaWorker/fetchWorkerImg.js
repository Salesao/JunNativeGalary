import axios from 'axios'
import { call, takeEvery, put } from "redux-saga/effects";
import { fetchSagaFulfilled, fetchSagaPending, RejectedSaga, removeImage } from '../reducers/imageSlice';
import { sagaActions } from './sagaActions';

const API_KEY = '23947034-df221ab48d32949e0387745df'


const callApi = async({url, method, data}) => {
    return await axios({
        url,
        method,
        data
    })
}

export function* fetchImgSaga(){
    try {
        yield put(fetchSagaPending())
        const result = yield call(() => 
        callApi({url: `https://pixabay.com/api/?key=${API_KEY}`}))
        yield result.data.hits.map((img) => {
            return img.favorite = false
        })
        yield put(fetchSagaFulfilled(result.data.hits))
    } catch (error) {
        yield put(RejectedSaga('NOT DOWNLOAD IMAG'))
    }
}

//реализация удаления через сагу, с изменением добавления и удаления мне лень заморачиваться, всё описано в extraReducers
export function* deleteImgSaga(id){
    try {
        yield call(() => 
        callApi({
            url:`https://pixabay.com/api/?key=${API_KEY}&id=${id}`,
            method:'DELETE'
        }))
        yield put(removeImage(id))

    } catch (error) {
        yield put(RejectedSaga("CAN'T DELETE IMAGE"))
    }
}

export default function* rootSaga(){
    yield takeEvery(sagaActions.FETCH_IMG_SAGA, fetchImgSaga)
    yield takeEvery(sagaActions.DELETE_IMG_SAGA, deleteImgSaga)
}