import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentMarksTable from './StudentMarksTable'
import StudentIdAsInput from './StudentIdAsInput'
import GettingStudentData from './GettingStudentData'

const Navigation = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<StudentIdAsInput/>}></Route>
            <Route path='/getting-student-data/:regNo' element={<GettingStudentData/>}></Route>
            <Route path='/student-mark-table/:regNo' element={<StudentMarksTable/>}></Route>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Navigation
