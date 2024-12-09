import { useState } from "react";
import Item from "./Item";
const FoodItems = (props) => {
  let [ActiveItems,setActiveItems] = useState([]);
  let onBuyButton = (item,event) =>{
    let newItems = [...ActiveItems,item];
    setActiveItems(newItems)
  }
  return (
    <>
      {/*map function is used to display the array items one by one using single line of code*/}
      <ul className="list-group">
        {props.items.map((item) =>(
          <Item key={item}
          foodItem={item}
          // set bought true if item is inside active items
          bought={ActiveItems.includes(item)}
          handelBuyButtonClicked={(event)=>onBuyButton(item,event)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
