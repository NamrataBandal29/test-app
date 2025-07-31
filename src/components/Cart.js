const Cart = (props) =>{

    const {resData} = props;

    const{name,cloudinaryImageId,cuisines,avgRating} = resData?.info
    return(
        <div className="cart">
            <img className="cart-img" alt="cartImg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+cloudinaryImageId}/>
            <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <h3>{avgRating}</h3>
            <h3>test1</h3>
        </div>
    )

}
export default Cart;