import ChildComponent from "./ChildComponent";
import { useState } from "react";

const ParentComponent = () => {

    const [studentData, setStudentData] = useState({
        studentID : "651",
        name : "Kethra",
        department : "ECE"
    })

    const handleChange = () => {
        setStudentData({...studentData, studentID : "652", name : "Packiam", department : "CSE"})
    }

    return(
        <div>
            <h1>This is Parent Component</h1>
            <p>I am {studentData?.name}</p>
            <ChildComponent {...studentData} click={handleChange}/>
        </div>
    )
}
export default ParentComponent;