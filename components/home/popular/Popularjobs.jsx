import useState from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from "expo-router";
import  styles  from './popularjobs.style';
import { COLORS, FONT, SIZES } from '../../../constants';

import  PopularJobCard  from '../../common/cards/popular/PopularJobCard'; 


const Popularjobs = () => {
  const router  = useRouter();
  const isLoading = false;
  const error = false;
  return (
    <View >
    <View style={ styles.container}>
    <View style={ styles.header}>
      <Text style={ styles.headerTitle} >Popularjobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
    </View>

      <View style={styles.cardsContainer}>
     { isLoading? <ActivityIndicator/> : error ?  <Text>Sorry Something went wrong</Text>:<FlatList data={[1,2,3,4]} 
     renderItem={({item})=>(
          <TouchableOpacity>
          <PopularJobCard item={item.class}/>
          </TouchableOpacity>
          
     )}
     keyExtractor={item =>item?.jobId}
     contentContainerStyle={{columnGap:SIZES.medium}}
     horizontal
     />}
      </View>

    </View>
    </View>
  )
}
 
export default Popularjobs