import { useParams } from "react-router-dom";
import { IMAGE_URL, API_URL } from "../Utils/constants";


const RestaurantCard =({resObj}) => {

   return(
        <div className="rounded-xl flex border p-4 m-4 w-70 flex-col shadow-lg transition-transform duration-500 ease-in-out hover:scale-105">
            <img className='border-green-700 border-5 rounded-2xl h-40 w-60' src={IMAGE_URL + resObj.cloudinaryImageId}/>
            <h3 className="font-bold py-4 truncate">{resObj.name}</h3>
            <h4 className="rating">⭐️ {resObj.avgRating}</h4>
            <h4 className="text-gray-400 truncate">🍛 {resObj.cuisines.join(', ')}</h4>
            <h4 className="text-gray-400 truncate"> 📍 {resObj.areaName}</h4>
        </div>
    )
}


export default RestaurantCard;

export const WithPromotedLabel = (RestaurantCard) => {
    return (props) => (
        <div className="relative">
            <RestaurantCard {...props} />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                Promoted
            </span>
        </div>
    );
}