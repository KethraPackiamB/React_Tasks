import React from 'react'

const VariousInputFields = () => {

  return (
    <div>
      <h1>Registration form</h1>
      <form action="" target='' method=''>
        <label for="text">Text : </label>
        <input type="text" id='text' disabled/>

        <br />

       <label htmlFor="password">Password : </label>
       <input type="password" id='password'/>

       <br />

       <label htmlFor="radio">Radio : </label>
       <input type="radio" id='radio'/>male
       <input type="radio" id='radio'/>female

       <br />

       <label htmlFor="checkbox">Check Box :</label>
       <input type="checkbox" id='checkbox'/>

       <br />

       <label htmlFor="">Button : </label>
       <input type="button" />

       <br />

       <label htmlFor="">Color : </label>
       <input type="color" />

       <br />

       <label htmlFor="">Email : </label>
       <input type="email" />

       <br />

       <label htmlFor="">File : </label>
       <input type="file" />

       <br />

       <label htmlFor="">Hidden : </label>
       <input type="hidden" />

       <br />

       <label htmlFor="">Image : </label>
       <input type="image" />

       <br />

       <label htmlFor="">Number : </label>
       <input type="number" />

       <br />

        <label htmlFor="options">Dropdown : </label>
       <select name="menu" id="options">
        <option value="">Select</option>
        <option value="1">Option-1</option>
        <option value="2" selected>Option-2</option>
        <option value="3">Option-3</option>
       </select>

       <br />

        <label htmlFor="">Textarea : </label>
        <textarea name="" id="" rows="10" cols='5'>Drop your comments...</textarea>

        <br />

        <button>Click</button>

        <br />

        <label htmlFor="">Field Set : </label>
        <fieldset>
            <legend>Title</legend>
            <label htmlFor="">Name : </label>
            <input type="text" />
            <br />
            <label htmlFor="">Age : </label>
            <input type="text" />
            <br />
            <label htmlFor="">Message : </label>
            <textarea name="" id="" rows={5} cols={15}>Suggestions</textarea>
            <br />
            <button>submit</button>
        </fieldset>

        <br />
        

        <label htmlFor="">Datalist : </label>
        <input type="text" list='browser' />
        <datalist id='browser'>
          <option value="option-1"/>
          <option value="option-2"/>
          <option value="option-3"/>
          <option value="option-4"/>
          <option value="option-5"/>
        </datalist>


      </form>
    </div>
  )
}

export default VariousInputFields;
