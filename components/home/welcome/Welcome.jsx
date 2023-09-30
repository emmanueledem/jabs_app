import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, TextInput, Imge } from 'react-native'
import {useRouter, } from "expo-router";
import styles from './welcome.style'
import { SIZES, icons } from '../../../constants';
const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
          <Text style={styles.userName} >Hello Emmanuel</Text>
          <Text style={styles.welcomeMessage} >Find Your Perfect Job</Text>
      </View>
      <View style ={styles.searchContainer}>  
      <View style ={styles.searchWrapper}>       
          <TextInput style={styles.searchInput}/>
      </View>
      </View>
    </View>
  )
}

export default Welcome