import { useRef, useState } from "react";
import { SData } from "../store/SData";
import { ReData } from "../store/ReData";

export function Search(){
    const [name , setname] = useState("");
    const cname = useRef("");
    return(
        <div className="search-container">
         <input 
           type="text" 
           placeholder="Enter cocktail name..." 
           className="search-input"
           onChange={(e) => {cname.current = e.target.value}}
         />
         <button 
           className="search-button"
           onClick={() => setname(cname.current)}
         >
           Get Recipe
         </button>
         <SData.Provider value={name}>
           <ReData/>
         </SData.Provider>
        </div>
    );
}