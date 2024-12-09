import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
// fragments are used to avoid exra <div> which we use to combinely pass all elements in single element
function App() {

  // use states
  let [textToShow,setTextState]=useState();
  let [foodItems,setfoodItems]= useState([
    "Daal",
    "Chaval",
    "Roti"
  ]);

  const onKeyDown = (event) =>{
    if(event.key==='Enter'){
      let newFoodItem = event.target.value;
      let newItems = [...foodItems,newFoodItem];
      setfoodItems(newItems);
      console.log(`Food value entered is : ${newFoodItem}`)
    }
    // textToShow=(event.target.value)
  };
  // conditional rendering
  // three types : 1.if-else , 2.ternary operators , 3.Logical operators
  // but in this case complete ui will be replaced by the if{}
  // but i want to print the title "Heathy Food" and do not want to print items
  // look the ternary operator is used below
  // if (healthyfood.length===0){
  //   return <h1>I am still hungry !</h1>
  // }
  return (
    // passing children in container
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodItems items={foodItems}></FoodItems>
      <p>{textToShow}</p>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
    </Container>
    <Container>
      Hey I am Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus officiis aspernatur aliquam. Repudiandae dignissimos molestias illum vero eum consequuntur.
    </Container>
    </>
  );
}

export default App;
