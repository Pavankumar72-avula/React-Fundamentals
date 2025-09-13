import "./App.css"
import { useState } from "react"
function App() {
  const[count,setCount]=useState(0)
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[formData,setFormData]=useState({
    email:"",
    password:""
  })
//   const handleEmail=()=>{
// setEmail(event.target.value)
//   }
//   const handlePassword=()=>{
// setPassword(event.target.value)
  //}
   const handleIncrement=()=>{
     setCount((prevCount)=>prevCount+1)
     console.log(count)
   }

  const handleClick = (name) => {
    console.log("you clicked the button")
    alert("login "+ name)
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    alert(`Email: ${formData.email} \nPassword: ${formData.password} `)
  }
  const handleChange =(event)=>{
  //  console.log(event.target.value)
  //  console.log(event.target.name)
    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    })
  }
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      { <form onSubmit={handleSubmit}>
      <p>I am a button</p>
      <input type="text" name="email" placeholder="enter your email" onChange={handleChange} />
      <input type="password" name="password" placeholder="enter your password" onChange={handleChange} />
      <button type="submit">login</button>
      </form> }
    </div>
  )
}


export default App
