import React from 'react'
import classes from './chat.module.css';
import { useState } from 'react';
import { ReactTyped } from "react-typed";
import { useRef, useLayoutEffect } from 'react';
const Chat = () => {
  const resRef = useRef()
  const [inputValue, setinputValue] = useState("");
  const [response, setResponse] = useState("Response from aiff    ffffffff  ffffffff ffffff fffffff fff ffff ffffff ffffffffff fffffff ff fffff fffffff....")
  const [Messages, setMessage] = useState([{
    Message: "",
    Response: ""
  },
]);
  const [Toggle, setToggle] = useState(true);

  useLayoutEffect(() => {
    scrollToBottom()
  }, [Messages])

  const scrollToBottom = () => {
    resRef.current?.scrollIntoView( {behaviour: 'smooth'})
  }
  const handleInput = (e) => {
    let val = e.target.value;
    setinputValue(e.target.value);
    if (e.target.value !== "") {
      setToggle(false);
    }
    else setToggle(true)

  }

  const handleClick = () => {
    console.log(inputValue)
    setMessage([...Messages, { Message: inputValue, Response: response }])
    setinputValue("")
    console.log(Messages)
  }

  return (
    <>
    
      <div style={{ width: "100vh", height: "80vh", overflowY: "scroll",backgroundColor: "#B0C5A4"}} className='container pt-5 mt-2'>

        {Messages.map((item, index) => {
          if(item.Message !== "")
          return <div ref={resRef} key={index} style={{display: 'block'}}>
            <p style={{ maxWidth: '40%', width: 'fit-content', wordWrap: 'break-word', padding: '12px', backgroundColor: '#EEEEEE', marginLeft: 'auto' }} className='rounded'>{ item.Message}</p>       
            <p className={`${classes.resTxt}`}>
            <ReactTyped
                strings={[item.Response]}
                typeSpeed={26}
                onComplete={(self) => self.cursor.remove()}
              
              />
              {/* showCursor={false} */}
            </p>
          </div>
      
        })}
   
      </div>
      <div style={{width: "100vh",backgroundColor: "#B0C5A4"}} className='container'>
      <div style={{backgroundColor: '#EEEEEE' }} className={`${classes.inputContainer}`}>
        <button className='bg-transparent border-0'><i className="bi bi-paperclip"></i></button>
        <input value={inputValue} onChange={(e) => { handleInput(e) }} placeholder='Enter a prompt here...'
          onKeyDown={(e) => { if (e.key == "Enter") { handleClick() } }}
          style={{ width: "90%" }}
          className={`${classes.inputBox} ml-2 bg-transparent border-0`} type="text" />
        <button onClick={handleClick} className={`${classes.searchbtn} border-0 my-2`} disabled={Toggle}><i className="bi bi-send-fill"></i></button>
        </div>
        </div>
    </>
  )
}

export default Chat
