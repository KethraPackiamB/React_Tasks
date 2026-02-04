import { useRef, useEffect } from 'react'

const InputFocus = () => {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    },[])

  return (
    <div>
      <h1>Input Focus</h1>
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default InputFocus;
