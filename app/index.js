import { useState } from "react";
import {View, Text, ScroolView, SafeAreaView, Dimensions} from "react-native";
import {useRouter, Stack} from "expo-router";
import { COLORS, FONT, SIZES, icons, images } from "../constants";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn , Welcome} from "../components"
import { ScrollView } from "react-native-gesture-handler";

const Home = () =>{
   const router  =  useRouter();
 return ( <SafeAreaView style = {{flex:1, backgroundColor: COLORS.lightWhite}}>
   <Stack.Screen 
   options={{
   
      headerStyle: {backgroundColor: COLORS.lightWhite},
      headerShadowVisible:false ,
         headerLeft:()=>{
       return  <ScreenHeaderBtn iconUrl = {icons.menu} dimensions="60%" />
         },
      headerRight:()=>{
      return   <ScreenHeaderBtn iconUrl = {images.profile} dimensions="100%" />
      },  
      headerTitle: "",
      
 }}/>
      <ScrollView showsVerticalScrollIndicator={false} >
            <View style={{ flex:1,padding:SIZES.medium}}>
            <Welcome/>
            <Popularjobs/>
            <Nearbyjobs/>
            </View>
      </ScrollView>
     </SafeAreaView>
  )
} 

export default Home;