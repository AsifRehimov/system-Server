import { useEffect, useState } from 'react';
import axios from "axios";


function HomePage() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('/show_data', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('item')}`,
      }
    }).then(data =>{
      return( 
        setData(data.data),
        console.log(data.data)
        )})
  }, [])

  const handlesubmit = (e, index) => {
    e.preventDefault();
    console.log(index);
    axios.delete(`/deletefile/${index._id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('item')}`,
      }
    }).then(res=> console.log(res))
    .catch(err =>console.log(err))
  }


  return (
    <div className="App">
      {
        data.map((index, key) => <div key={key}>
          {/* <input type='file' value={`http://localhost:1992/file/${x.originalname}`}/> */}
          {/* <video width="auto" height="auto" controls > */}
          {/* <source src={`http://localhost:1992/file/${x.originalname}`} type="video/mp4"/> */}
          {/* </video> */}
          {/* <a href={`http://localhost:1992/file/${x.originalname}`} target="_blank" rel="noreferrer">View File</a> */}

          {/* <Embed url={`http://localhost:1992/file/${x.originalname === 'image/jpeg' && x.originalname}`}  key={key}/> */}
          {/* <embed  url={`http://localhost:1992/file/${x.originalname === 'image/jpeg' && x.originalname}`} /> */}
          <div>              
          {index.type === 'application/pdf' &&<img src={`http://localhost:1992/file/${index.originalname}`} onClick={(e) => handlesubmit(e,index)} style={{width:"100px", height:"100px"}} alt=''/>}
          {index.type === 'application/pdf' && <a href = {`http://localhost:1992/file/${ index.originalname}`} >Download Pdf</a>}
          </div>
 
        </div>)
      }
    </div>
  );
}
export default HomePage;
