// accepting and printing CHILDREN passed by app.jsx
const Container = (props) =>{
    return(
        <div className="container">
        {props.children}
        </div>
    )
}
export default Container;