import { useState } from "react";

const UserDetailsForm = () => {

    const [data, setData] = useState({
        name : "",
        birthDate : "",
        email : "",
        gender : "",
        photo : "",
        resume : "",
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(data);
    }

   
  return (
    <div className="form-fields">
      <h1>User Details Form</h1>
      <form action="" onSubmit={handleSubmit}>
      <div>
      <label htmlFor="">Name : </label>
      <input type="text" name="name" value={data.name} onChange={(e)=>setData(e.target.value)}/>
      </div>

      <div>
      <label htmlFor="">Email : </label>
      <input type="email" name="email" value={data.email} onChange={(e)=>setData(e.target.value)}/>
      </div>

      <div>
      <label htmlFor="">Date of Birth : </label>
      <input type="date" name="birthDate" value={data.birthDate} onChange={(e)=>setData(e.target.value)}/>
      </div>

      <div>
      <label htmlFor="">Gender : </label>
      <input type="radio" name="gender" value="male" onChange={(e)=>setData(e.target.value)}/>Male
      <input type="radio" name="gender" value="female" onChange={(e)=>setData(e.target.value)}/>female
      </div>

      {/* <div>
     <label htmlFor="">Photo : </label>
     <input type="file" accept="image/*"  value={data.photo} placeholder="upload photo" onChange={(e)=>setData(e.target.value)}/>
      </div>

      <div>
     <label htmlFor="">Resume : </label>
     <input type="file" accept=".pdf"  value={data.resume} placeholder="Upload Resume" onChange={(e)=>setData(e.target.value)}/>
     </div> */}

     <div>
      <button type="submit">Submit</button>
     </div>
    </form>
    </div>
  )
}

export default UserDetailsForm;
