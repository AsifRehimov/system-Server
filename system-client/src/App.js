import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const[data, setData] = useState([])
  useEffect(()=>{
    axios.get('/show_data',  { headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFzaWZzQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYXNpZiIsImFkbWluIjpmYWxzZSwiaWQiOiI2NGE1Nzk5NzBiZDdmNmIxZTFiM2NhN2EiLCJleHAiOjE2ODg5OTgxMDMsImlhdCI6MTY4ODk5NDUwM30.40FklA4nkl_bwHZ-TaFFVmjwloEA8ysvlZnLi6uEGvA`,
    }}).then(data => setData(data.data))
  },[])
  return (
    <div className="App">
      {
        data.map((x) => <div> 
          <img src={filepath} />
        </div>)
      }
    </div>
  );
}
export default App;