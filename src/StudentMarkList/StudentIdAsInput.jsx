import React from 'react';
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

const StudentIdAsInput = () => {

   const navigate = useNavigate();

    const regNoRef = useRef();

    const handleSubmit = () => {
        console.log(regNoRef.current.value);
        navigate(`/getting-student-data/${regNoRef.current.value}`);
    }

  return (
    <div>
      <h1>Student Data</h1>
      <input type="text" ref={regNoRef} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default StudentIdAsInput;
