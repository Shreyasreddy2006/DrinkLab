import { useContext, useState } from "react";
import { ReContext } from "../store/ReData";
import { Recipe } from "./recipecom";

export function DataRec(){
    const data = useContext(ReContext);
    const arr = [];
    if(data){
       for(let i = 0;i<data.length;i++){
         arr.push(data[i]);
       }
    }

    return(
        <div className="recipe-container">
         {arr.map((item , index) => <Recipe item={item} index={index} key={index}></Recipe>)}
        </div>
    );
}