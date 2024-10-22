import React, { useContext, useState } from "react";
import { useSearchApi } from "../contexts/SearchContext";
import { useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";

function Cards() {

    const { data, loading, error } = useSearchApi();
    const navigate = useNavigate();
    

    const handleCardClick = (id) =>{
        (navigate(`/recipe/${id}`));
    }

    
    if (loading) {
        return <RingLoader color="#3498db" loading={loading} size={50} />;
    }if(error){
        return <div>errore: {error}</div>
    } if (!data || !data.results || data.results.length === 0) {
        return <div></div>;
    }
    

        return(
<div className="font-nunito max-w-screen-lg mx-auto p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.results.map((recipe) => (
            <div key={recipe.id} 
            className="border rounded-lg overflow-hidden shadow-md w-full h-auto bg-custom cursor-pointer"
            onClick={() => handleCardClick(recipe.id)}>
                
                <img 
                    src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`} 
                    alt={recipe.title} 
                    className="w-full h-48 object-cover rounded-t-lg" 
                />
                <h3 className="text-white font-nunito p-4">{recipe.title}</h3>
            </div>
        ))}
    </div>
</div>
    )
}
export default Cards;
