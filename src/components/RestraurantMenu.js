import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

import { MENU_URL } from "./Utils/constants";

const RestraurantMenu = ()=> {
    const resId = useParams().id;
   // console.log(useParams().id,'useParams()',resId);
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{fetchMenu()},[]);

    const fetchMenu = async ()=> {
        const result =  await fetch(MENU_URL+resId);
        console.log(MENU_URL+resId,'MENU_URL+resId',resId);
        const response = await result.json();
        console.log(response,'result testing');
        setResInfo(response);
    }

    //console.log(resInfo?.data?.cards[2]?.card.card.info,'resInfo testing');

    if (resInfo === null) {
        return;
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    //console.log(itemCards,'itemCards testing');
   // console.log(resInfo.data.cards[4], 'resInfo');

 

    //const categories = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((item) => item.card.card.type === "CATEGORY_TYPE_RECOMMENDED" )[0].card.card.itemCards;
    //console.log(resInfo.data.cards[4],'categories');
    return (
        <div className="restraurant-menu">
            <h1 className='font-bold text-center text-2xl'>{name}</h1>
            <h3 className='text-center'>Menu</h3>
            <ul className='font-bold text-lg text-center'>
                <li>{cuisines.join(',')}</li>
            </ul>
            <h4 className='text-center'>{costForTwoMessage}</h4>
            <div className='text-center justify-center flex flex-col items-center' key={resId}>
                <ul>
                    {itemCards.map(item => <>
                    <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price}</li>
                    </>)}
                </ul> 
            </div>
        </div>
    );
}

export default RestraurantMenu;