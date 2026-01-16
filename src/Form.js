import { useState } from "react";

const Form = () => {
const [data, setData] = useState({
        firstName : "",
        lastName : "",
        city : "",
        country : "",
    });

    const handleChange = (e) => {
        const key = e.target.name;
        setData({...data, [key]:e.target.value});
        console.log(`${key} : ${e.target.value}`);
    }

    const handleChanges = (e,key) => {
        setData({...data, [key]:e.target.value});
        }

    return(
        <div className="form-fields">
            <div> 
                <label htmlFor="firstName">First Name :</label>
                <input id="firstName" value={data.firstName} name="firstName" onChange={e =>handleChanges(e,"firstName")}/>
            </div>
            <div> 
                <label htmlFor="lastName">Last Name :</label>
            <input id="lastName" name="lastName" value={data.lastName} onChange={handleChange}/>
            </div>
           <div> 
            <label htmlFor="city">City :</label>
            <input id="city" name="city" value={data.city} onChange={handleChange} />
            </div>
           <div>
            <label>Country :</label>
            <input id="country" name="country" value={data.country} onChange={handleChange}/>
            </div>
            
            </div>
    )
}
export default Form;