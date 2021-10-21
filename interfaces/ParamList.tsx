import { IPhotos } from './IPhotos';

export type navigateParamList = {
    HomePage:undefined
    LookImage:{
        tags:string
    }
    Favorite:undefined
    FlatList: {
        item:IPhotos[]
    }
    Settings: {favorite: boolean}
}