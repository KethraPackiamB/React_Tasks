const ChildComponent = ({click,name,studentID,department}) => {

return(
        <div>
            <h1>Student Details</h1>
            <p>Name :{name}</p>
            <p>Register No : {studentID}</p>
            <p>departmant : {department}</p>
            <button onClick={()=>{click()}}>update User</button>
        </div>
    )
}
export default ChildComponent;