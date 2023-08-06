import { useState, useMemo } from "react"
import { findPrime } from "../utils/helper";


const Demo = () => {
    const [text, setText] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(true)

    // console.log("..render")

    // Heavy operation
    // Every time when i type something in the input box, component will re-render and calculate the prime no.
    // Every time the state changes and the theme changes this Heavy operation will take place, so I can memoize that heavy operation
    // const prime = () => {
    //     console.log("Calculating Prime of", text)
    //     findPrime(text)
    // }

    

    // Cached the result using useMemo()
    const prime = useMemo(() => findPrime(text), [text]);
    // means keep memoizing it in every re-render and only changes when my text changes


    
  return (
    <div className={"mt-24 border border-black w-2/4 mx-2 " + (isDarkTheme && "bg-gray-900 text-white")}>
      <div className='m-2 flex justify-between'>
            <input className={'p-2 border border-black w-64 text-black'} type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your text" />

            {/* every time when i toggle my theme it will re-render, and also calculate the prime no, but it is not required, theme is 
            independent from calculating the prime no,but it will calculate the prime also because component re-render  */}
            <button onClick={() => setIsDarkTheme(!isDarkTheme)} className='font-bold border border-black px-4 bg-white text-black'>{isDarkTheme ? 'Light' : 'Dark'}</button>
        </div>

      <div>
        <h1>nth Prime: {prime}</h1>
      </div>
    </div>
  )
}

export default Demo;
