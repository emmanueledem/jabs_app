import useState from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from "expo-router";
import  styles  from './popularjobs.style';
import { COLORS, FONT, SIZES } from '../../../constants';

import  PopularJobCard  from '../../common/cards/popular/PopularJobCard'; 
import useFetch from '../../../hooks/useFetch';

const Popularjobs = () => {
  const router  = useRouter();
  const{data, isLoading, error} = useFetch('search',{query:'React Developer', num_pages:1})
  return (
    <View >
    <View style={ styles.container}>
    <View style={ styles.header}>
      <Text style={ styles.headerTitle}>Popularjobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
    </View>
    
      <View style={styles.cardsContainer}>
     { isLoading? <ActivityIndicator/> : error ?  <Text>Sorry Something went wrong</Text>:<FlatList data={data}
     renderItem={({item})=>(
          <TouchableOpacity>
          <PopularJobCard item={item}/>
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