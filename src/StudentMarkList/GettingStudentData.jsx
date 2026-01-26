import { useParams, useNavigate } from "react-router-dom";
import StudentMarksTable from "./StudentMarksTable";
import { useEffect } from "react";


const GettingStudentData = () => {
    
    const studentMarkData = [
        {
            regNo : "1",
            maths : "89",
            science : "78",
            social : "76"
        },
        {
            regNo : "2",
            maths : "67",
            science : "75",
            social : "87"
        },
        {
            regNo : "3",
            maths : "54",
            science : "89",
            social : "65"
        },
    ]

    const params = useParams();

    const navigate = useNavigate();
   

    useEffect(()=>{
         const registerNumber = params.regNo;
        for (const studentMarks of studentMarkData){
            if(studentMarks.regNo === registerNumber){
                navigate(`/student-mark-table/${params.regNo}?maths=${studentMarks.maths}&science=${studentMarks.science}&social=${studentMarks.social}`)
            }
        }
    },[]);
   
    
  return (
    <div>
        <h1>{params.regNo}</h1>
       
    </div>
  )
}

export default GettingStudentData;
