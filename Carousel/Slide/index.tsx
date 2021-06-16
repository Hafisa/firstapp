import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import Card from '../../components/Card'
export const Slide = (props: any) => {
  return (
    <View style={styles.slide}>
      <Card {...props} />
    </View>
  );
}
export default Slide;