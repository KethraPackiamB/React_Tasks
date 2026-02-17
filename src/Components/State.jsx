const State = (props) => {

console.log(props);

    return(
        <div>
            <p>{props.continent} is my Country.</p>
            <p>{props.ocean} is the biggest ocean</p>
           
        </div>
    )
}
export default State;