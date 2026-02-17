import {useState, useTransition} from 'react';

const LargeData = Array.from({length : 10000}, (_,i) => `Item ${i + 1}`);

const UseTransitionExample = () => {

    const [input, setInput] = useState("");
    const [filteredList, setFilteredList] = useState(LargeData);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
        startTransition(()=>{
            const filtered = LargeData.filter((item)=> item.toLowerCase().includes(value.toLowerCase()));
            setFilteredList(filtered);
        });
    };
  return (
    <div>
      <h1>UseTransition Example</h1>
      <input 
      type="text"
      value={input}
      onChange={handleChange}
      placeholder='Search items'
       />

       {isPending && <p>Loading...</p>}

       {!isPending && filteredList.length === 0 && <p>No results found</p>}

       <ul>
        {filteredList.slice(0,10).map((item, index)=>(<li key={index}>{item}</li>))}
       </ul>
    </div>
  )
}

export default UseTransitionExample
