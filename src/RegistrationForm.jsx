import { useState } from "react";

const RegistrationForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    course: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const key = e.target.name;
    setData({ ...data, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setSubmittedData(data);
    localStorage.setItem("Submitted_Data", JSON.stringify(data));
  };

  const handleReset = () => {
    setData({
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      course: "",
    });
    setSubmittedData(null);
  };

  return (
    <div className="form-field">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name : </label>
          <input
            type="text"
            value={data.firstName}
            name="firstName"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name : </label>
          <input
            type="text"
            value={data.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id=""
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="gender">Gender : </label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          Female
        </div>

        <div>
          <label htmlFor="course">Course : </label>
          <select
            name="course"
            id=""
            value={data.course}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </div>

        <button type="submit">Submit</button>
        <button type="reset" onClick={handleReset}>
          reset
        </button>
      </form>

      <h1>Student Details</h1>
      <p>First Name : {submittedData?.firstName}</p>
      <p>last Name : {submittedData?.lastName}</p>
      <p>Email : {submittedData?.email}</p>
      <p>Gender : {submittedData?.gender}</p>
      <p>Course : {submittedData?.course}</p>
      <p>city : {submittedData?.city}</p>
    </div>
  );
};

export default RegistrationForm;
