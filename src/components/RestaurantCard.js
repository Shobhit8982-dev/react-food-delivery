import { IMAGE_URL, API_URL } from "../Utils/constants";

const data = async() => { await fetch(API_URL);
    const json = await data.json();
    console.log('json',json);
}

const RestaurantCard =({resObj}) => {
    // console.log("resList", resObj);
    
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


// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/7/2b1d78bb-5604-46db-99ba-02de93dc58a2_881203.jpg
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/258f53ef-fe93-4523-902c-37f3229b1a39_806682.jpg


export default RestaurantCard;


// const RestaurantCard =(props) => {
//     const {resObj} = props;    //here we are destructuring props to get resObj. 
//                                // here the entire resObj is passed as a prop to 
//                                // RestaurantCard component from AppLayout component.inside the component 
//                                // we can access it using props.resObj or we can destructure it like this.
//     return(
//         <div className="resCard">
//             <img className='resImg' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resObj.cloudinaryImageId}/>
//             <h3 className="resName">{resObj.name}</h3>
//             <h4 className="rating">{resObj.avgRating}</h4>
//             <h4 className="foodItems">{resObj.cuisines.join(", ")}</h4>
//             <h4 className="location">{resObj.areaName}</h4>
//         </div>
//     )
// }
