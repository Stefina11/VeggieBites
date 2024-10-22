import React, { useState,} from 'react';
import { useSearchApi } from '../contexts/SearchContext.jsx';

function SearchBar() { 

    const {fetchData} = useSearchApi();
    const[input, setInput] = useState('');

    const HandleClick = () => {
        fetchData(input);
    }
    const handleKey = (e) => {
        if(e.key === "Enter"){
            HandleClick();
        }
    }
                          
    return ( 
        <div className="flex items-center space-x-2 border-cyan-950"> 
            <input type="text" 
            value={input} 
            onChange= {(e) => setInput(e.target.value) } 
            onKeyDown = {handleKey}
            placeholder='digita qui...'
            className=" w-full rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-custom" />
            
            <button onClick={HandleClick} 
            className=' font-nunito font-bold bg-customGold text-custom rounded-md px-6 py-2 hover:bg-opacity-65 transition duration-200"'>
                 Cerca</button>
        </div> 
        
    ); 
}

export default SearchBar;
