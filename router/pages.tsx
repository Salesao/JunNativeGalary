import { RouteConfig } from '@react-navigation/core';
import { Favorites } from '../components/Favorites';
import { ListImage } from '../components/ListImage';

export interface pagesProps{
    title:string
    iconName:string
    tabLabel:string
    name:any
    component:any
}


export const pages: pagesProps[] = [
    {   
        title:'Все изображения',
        iconName:'desktop',
        tabLabel:'Галерея',
        name:'HomePage',
        component:ListImage
    },
    {
        title:'Избранное',
        iconName:'star',
        tabLabel:'Избранное',
        name:'Favorite',
        component:Favorites
    },
]