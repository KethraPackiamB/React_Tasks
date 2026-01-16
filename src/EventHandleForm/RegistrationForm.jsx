import { useState } from "react";

const RegistrationForm = () => {

    const [data, setData] = useState({
        name : "",
        password : "",
    });

    const [submittedData, setSubmittedData] = useState(null);


    const handleChange = (e) => {
        const key = e.target.name;
        setData({...data, [key] : e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(data);
    }

    const handleKeyDown = (e) => {
        console.log("KeyDown : ", e.key);
    }

    const handleKeyUp = (e) => {
        console.log("Key Up :", e.target.value);
    }

    return(
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">User Name : </label>
                 <input type="text" 
                 name="name" 
                 value={data.name} 
                 onChange={handleChange}
                 onKeyDown={handleKeyDown}
                 onKeyUp={handleKeyUp}/>
            </div>
           <div>
                <label htmlFor="">Password : </label>
                 <input type="text" name="password" value={data.password} onChange={handleChange}/>
            </div>
            <button type="submit">Submit</button>
            </form>

            <h1>Hello {submittedData?.name}</h1>

           
        </div>
    )
}

export default RegistrationForm;