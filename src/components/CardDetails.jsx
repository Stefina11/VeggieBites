import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CardDetails() {
    const {id} = useParams();
    const[recipe, setRecipe] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    const apiKey = '6f46f2bf7549445b8f73083648f092ae';

    useEffect(() =>{
        const fetchRecipe = async() =>{
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
                if(!response.ok) throw new Error ('errore durante il fetch');
                const result = await response.json();
                setRecipe(result);
                console.log(result);
            } catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        };
        fetchRecipe();
    },[id]);

        if(loading) return <div>Caricamento...</div>
        if(error) return <div>errore: {error}</div>

        if (!recipe) return <div>Nessuna ricetta trovata.</div>;

    return(
        <div className="font-nunito max-w-screen-lg mx-auto p-4 mt-20 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 text-center font-nunito">{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} className="flex justify-center w-1/2 h-auto rounded-lg mb-4"/> 
            <p 
                className="text-center mb-6 font-nunito" 
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
            />
            <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-950"> Vai alla ricetta completa</a>
        </div>
    )

}

export default CardDetails;