const FoodInput = ({handleKeyDown}) =>{
    return(
        <input type="text" placeholder="Enter item here......."
        className="input"
        // event is by default passed here , no need to pass again
        onKeyDown={handleKeyDown}></input>  
    )
}
export default FoodInput;