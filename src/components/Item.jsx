const Item = ({foodItem,bought,handelBuyButtonClicked}) =>{
    // array / object destructuring
    // let {foodItem} = props; 
    return (
        <li className={`list-group-item kg-item ${bought && "active"}`}>
            <span className="kg-span" >
            {foodItem}
            </span>
            <button className="btn btn-info button"
            // onClick={()=>console.log(`${props.foodItem} button is clicked`)}
            onClick={handelBuyButtonClicked} 
            >Buy</button>
        </li>
    )
}
export default Item;