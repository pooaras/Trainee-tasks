import React from 'react'
import Axios from 'axios'
import { useEffect ,useState} from 'react'
const Home = () => {
  const [Data, setData] = useState("")
  const [Excuse, setExcuse] = useState(null)

  useEffect(() => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${Excuse}`).then((res) => { setData(res.data[0]?.excuse); console.log(res.data[0]) })
  },[Excuse] )

  // async function getUser() {
  //   try {
  //     const response = await axios.get('/user?ID=12345');
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  const handleChange = (e) => {
    if (e.target.value !== "" && e.target.value!= undefined) {  
      console.log(e.target.value)
      setExcuse(e.target.value);
    }  
  } 
  return (
    <div>
       <h2>Generate excuses</h2>
      <select name="" id="" onChange={handleChange}>
        <option >select excuse</option>
        <option value="family">Family</option>
        <option value="funny">Funny</option>
        <option value="office">Office</option>
        <option value="children">Children</option>
        <option value="developers">Developers</option>
      </select>
 
      <p>{Data} </p>
    </div>
  )
}

export default Home
