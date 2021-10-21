import React, { FC } from 'react';
import { useAppSelector } from '../hooks/redux';
import { FlatListImage } from './FlatListImage';
import { navProps } from '../interfaces/NavProps';

export const Favorites: FC<navProps> = ({navigation}) => {

  const {favoriteImage} = useAppSelector(state => state.img)
  return (
      <FlatListImage data={favoriteImage} navigation={navigation}
      nothingText='Нет любимых картинок'/>
  );
};