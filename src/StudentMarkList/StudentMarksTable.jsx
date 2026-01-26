import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const StudentMarksTable = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  const maths = searchParams.get("maths");
  const science = searchParams.get("science");
  const social = searchParams.get("social");

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");
    }
  return (
    <div>
        <button onClick={handleNavigate}>back</button>
      <table>
        <thead>
            <tr>
            <th>Register Number</th>
            <th>Maths</th>
            <th>Science</th>
            <th>Social</th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>{params.regNo}</td>
              <td>{maths}</td>
              <td>{science}</td>
              <td>{social}</td>
                
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StudentMarksTable;
