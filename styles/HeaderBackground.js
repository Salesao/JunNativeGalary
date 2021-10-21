import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export const HeaderBackground = () => {
  return (
    <LinearGradient
      colors={['#790598', '#BC1399']}
      style={{
        height: 60,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
      }}
    />
  );
};
