import axios from "axios";
import { useState , useEffect} from "react";
import {APIKEY} from  'react-native-dotenv';

const UseFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);
   const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/'+endpoint,
    headers: {
        'X-RapidAPI-Key': APIKEY,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
    params: {...query}
  };

  const fetchData = async () => {
        setIsLoading(true)
        try{
            const response = await axios.request(options);
            setData(response.data.data)
            setIsLoading(false)
        }catch(error){
            setError(error)
            alert('There is an error')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect( ()=>{
     fetchData();
     print('useeffect')
    }, []);


    const refetch = ()=>{
        setIsLoading(true)
         fetchData();
         print('refetch')
    }
    return {isLoading, error, data, refetch}
}


export default UseFetch;

