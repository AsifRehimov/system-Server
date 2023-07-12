import { useEffect, useState } from 'react';
import axios from "axios";

function HomePage() {
  const[data, setData] = useState([])
  useEffect(()=>{
    axios.get('/show_data',  { headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('item')}`,
    }}).then(data => setData(data.data))
  },[])
  return (
    <div className="App">
      {
        data.map((x) => <div> 
          <img src={`http://localhost:1992/file/${x.originalname}`} />
          {/* <input type='file' value={`http://localhost:1992/file/${x.originalname}`}/> */}
          <video width="auto" height="auto" controls >
          <source src={`http://localhost:1992/file/${x.originalname}`} type="video/mp4"/>
          </video>
          {/* <object width="10%" height="400" data={`http://localhost:1992/file/${x.originalname}`}  type="application/pdf">   </object> */}
          <a href={`http://localhost:1992/file/${x.originalname}`} target="_blank" rel="noreferrer">View File</a>


        </div>)
      }
    </div>
  );
}
export default HomePage;
