import Cart from "./Cart";
import { useEffect, useState } from "react";

const Body = () =>{
    const [ListData,setListData] = useState([]);
    
    useEffect(() =>{
        fatchData();

    },[]);

    const fatchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setListData(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
    
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="cart-iteam">
                {ListData.map((res) =>
                <Cart key={res.info.id} resData={res} />)}
                

            </div>
        </div>
    )
}
export default Body;