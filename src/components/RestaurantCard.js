import { CDN_URL } from './Utils/constants';

const RestaurantCard = ( restaurantData ) => {
    console.log(restaurantData,'restaurantData');
    const { cloudinaryImageId, name, cuisines, avgRating } = restaurantData?.restaurantData?.info || {};

    return (
        <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="image"/>
            <h4>{name}</h4>
            <div className='cuisines'>{cuisines?.join(', ')}</div>
            <div className='rating'>{avgRating}</div>
        </div>
    );
};

export default RestaurantCard;

export const WithVegLabal = (RestaurantCard) =>{
    return (restaurantData) => {
        return (
            <div>
                <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>Veg</label>
                <RestaurantCard {...restaurantData}/>
            </div>
        )
    }
}
