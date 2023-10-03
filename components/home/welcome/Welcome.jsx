import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, TextInput, Image } from 'react-native'
import {useRouter, } from "expo-router";
import styles from './welcome.style'
import { COLORS, Images, SIZES, icons } from '../../../constants';
const jobTypes = ['Full-Time', 'PartTime', 'Cont ractor'];
const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType,] = useState('Full-Time');

  return (
    <View>
      <View style={styles.container}>
          <Text style={styles.userName} >Hello Emmanuel</Text>
          <Text style={styles.welcomeMessage} >Find Your Perfect Job</Text>
      </View>
      <View style ={styles.searchContainer}>  
      <View style ={styles.searchWrapper}>       
          <TextInput style={styles.searchInput}
          onChange={()=>{}}
          value=''
          placeholder='what are you looking for?'
          />
      </View>
      <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
        <Image style={styles.searchBtnImage}  resizeMode='contain' source={icons.search} />
      </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
      <FlatList data={jobTypes} renderItem={({item}) =>(
      <TouchableOpacity onPress={()=>{
          setActiveJobType(item)
          router.push('/search/${item}')
      }} style={styles.tab(activeJobType, item)} >
        <Text  style={styles.tabText(activeJobType, item)}>{item}</Text>
      </TouchableOpacity>
      )}
      keyExtractor={item  => item}
      contentContainerStyle={{columnGap:SIZES.small,}}
      horizontal
      />
      </View>
    </View>
  )
} 

export default Welcome