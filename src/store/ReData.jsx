import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { SData } from "./SData";
import { DataRec } from "../components/datarec";

export const ReContext = createContext();

export function ReData(){
    const name = useContext(SData);
    const [data , setdata] = useState();
    const [err , seterr] = useState();
    useEffect(() => {
        axios.get('https://api.api-ninjas.com/v1/cocktail' , {
            headers : {
                'X-Api-Key' : import.meta.env.VITE_API_NINJAS_KEY
            },
            params : {
                'name' : `${name}`
            }
        }).then(response => {
           setdata(response.data);
           console.log(response.data);
        }).catch(err => {
           seterr(err.data);
           console.log(err);
        })
    },[name])

    return(
        <>
          <ReContext.Provider value={data}>
            <DataRec></DataRec>
          </ReContext.Provider>
        </>
    );
}