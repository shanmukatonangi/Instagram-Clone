import axios from 'axios';
import React, { useRef } from 'react'

const Explore = () => {
  let search=useRef();
  const [result,setResult]=React.useState(null);

 async function Search(){

let searchfeild=search.current.value;
let apires= await axios.get(`http://localhost:8888/profile-page/${searchfeild}`);
setResult(apires.data)
  }

  function pp(){
    window.location.href=`/profile-page/${result.username}`
  }
  return (
    <div>
    <input type="text" placeholder='Search...' ref={search} />
    <button onClick={Search}>Search</button>
    {result!=null ? <div>
      <h1>{result.username}</h1>
      
      <button onClick={pp}>Go to profile</button>
    </div> : <h1>No Result</h1>}

      
    </div>
  )
}

export default Explore
