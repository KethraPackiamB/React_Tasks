import React, { useState } from 'react'

const RegistrationForm = () => {

    const [gender, setGender] = useState("");

  return (
    <div>
      <form action="">

       
        <input type="text" placeholder='enter name' minLength={3} required/>
 
        <input type="email" placeholder='enter email'/>

       
        <input type="password" placeholder='enter password' minLength={8}/>

        <input type="date" />

        {/* <input type="radio" value="male" name='gender' checked={gender === "male"} onChange={(e)=>setGender(e.target.value)} />male
        <input type="radio" value="female" checked={gender == "female"} name='gender' onChange={(e)=>setGender(e.target.value)}/>female
        <input type="radio" value="others" checked={gender == "others"} name='gender' onChange={(e)=>setGender(e.target.value)}/>others */}


        <input type="radio" value="male" name='gender' defaultChecked/>male
        <input type="radio" value="female" name='gender' defaultChecked/>female
        <input type="radio" value="others" name='gender' defaultChecked/>others


        <input type="file" accept='image/gif'/>

        <textarea name="" id="" minLength={100} maxLength={500} placeholder='type something'></textarea>

        <select name="" id="" multiple size="2">
            <option value="">Select</option>
            <option value="">India</option>
            <option value="">Japan</option>
            <option value="">Italy</option>
            <option value="">mexico</option>
            <option value="">pakistan</option>
        </select>

        <input type="checkbox" />
      </form>
    </div>
  )
}

export default RegistrationForm;
