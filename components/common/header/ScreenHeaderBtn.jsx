import React from 'react'
import { TouchableOpacity, Image, } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimensions, handleOnpress}) => {
  return (
   <TouchableOpacity style={styles.btnContainer} onPress={handleOnpress} >
    <Image source={iconUrl} resizeMode='cover' style={styles.btnImg(dimensions)} />
   </TouchableOpacity>
  )
 }

export default ScreenHeaderBtn;