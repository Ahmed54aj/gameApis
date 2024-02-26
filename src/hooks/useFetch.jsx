import { useEffect } from "react"
import axios from "axios"
// eslint-disable
export default function useFetch(url,data, setData){

    useEffect(() => {
        
    if (data && data.length > 0) {
        // If data is already populated, skip fetch operation
        return;
      }
        (
            async function(){
                try{
                            const response = await axios.get(url)
                            setData(response.data);
                            return data;
                 
                }catch(err){
                    console.log('error')
                    console.log(err)
                }
            }
            
        )()
        // eslint-disable-next-line
    },[]);

    return data

}