import axios from "axios";
import { useState , useEffect} from "react";
import {APIKEY} from 'react-native-dotenv';

const UseFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

    const apiKey = APIKEY;

   const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/${endpoint}',
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
    params: {...query}
   
  };

  const fetchData = async () => {
        setIsLoading(true)
        try{
            const response = axios.request(options);
            setData(response.data.data)
            setIsLoading(false)
        }catch(error){
            setError(error)
            alert('There is an error')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(async ()=>{
     await fetchData();
    }, []);


    const refetch =  async ()=>{
        setIsLoading(true)
        await fetchData();
    }

    return {isLoading, error, data, refetch}
}



