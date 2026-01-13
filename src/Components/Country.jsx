import State from "./State";
const Country = () => {

    const countryDetails = {
        country : "India",
        continent : "Asia",
        ocean : "Indian Ocean",
    }

    const {country,...restvalues} = countryDetails;
    // console.log(restvalues);
    

    return(
        <div>
            <State {...restvalues}/>
        </div>
    )
}
export default Country;