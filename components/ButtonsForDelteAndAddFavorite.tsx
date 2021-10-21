import React, { FC } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface ItemPropsButtons {
  favorite:boolean
  changeFavorite:() => void
  removeImg:() => void
}

export const ButtonsForDelteAndAddFavorite: FC<ItemPropsButtons> = ({favorite, changeFavorite, removeImg}) => {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.touchContainer} onPress={changeFavorite}>
        <View style={{flexDirection: 'row'}}>
          <Icon solid={favorite} name="heart" size={22} color={favorite ? 'red' : 'gray'} />
          <Text style={styles.touchContent}>
            {!favorite ? 'Добавить в избранное' : 'Удалить из избранного'}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
      <TouchableOpacity style={styles.touchContainer} onPress={removeImg}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="trash-alt" size={22} />
          <Text style={styles.touchContent}>Удалить изображение</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 85,
    width: '95%',
    marginHorizontal: 15,
    marginBottom: 15,
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
  },
  touchContainer: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchContent: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 10,
  },
  hr: {
    borderTopWidth: 1,
    height: 1,
    width: '100%',
    borderTopColor: '#C4C4C4',
  },
});
