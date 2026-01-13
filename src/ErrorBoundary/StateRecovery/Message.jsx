import { useState } from "react";

const Message = ({message,onSubmit}) => {

    const [data, setData] = useState(message);
    const [crash, setCrash] = useState(false);

    const handleChange = (e) => {
        setData(e.target.value);
        console.log(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);

         if(data === "crash"){
        setCrash(true);
    }
    onSubmit(data);
    setData("");
    }

   if(crash) {
    throw {message : "CRASHED!"};
   }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={data} onChange={handleChange} placeholder="Type here" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Message;