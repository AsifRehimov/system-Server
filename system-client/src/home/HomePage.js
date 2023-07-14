import { useEffect, useState } from 'react';
import axios from "axios";


function HomePage() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('/show_data').then(data =>{
      return( 
        setData(data.data),
        console.log(data.data)
        )})
  }, [])



  return (
    <div className="App">
      {
        data.map((x, key) => <div key={key}>
          {/* <input type='file' value={`http://localhost:1992/file/${x.originalname}`}/> */}
          {/* <video width="auto" height="auto" controls > */}
          {/* <source src={`http://localhost:1992/file/${x.originalname}`} type="video/mp4"/> */}
          {/* </video> */}
          {/* <a href={`http://localhost:1992/file/${x.originalname}`} target="_blank" rel="noreferrer">View File</a> */}

          {/* <Embed url={`http://localhost:1992/file/${x.originalname === 'image/jpeg' && x.originalname}`}  key={key}/> */}
          {/* <embed  url={`http://localhost:1992/file/${x.originalname === 'image/jpeg' && x.originalname}`} /> */}
          <div>              
          {<img src={`http://localhost:1992/file/${x.originalname}`} style={{width:"100px", height:"100px"}} alt=''/>}
          {x.type === 'application/pdf' && <a href = {`http://localhost:1992/file/${ x.originalname}`} >{x.originalname}Download Pdf</a>}
          </div>
 
        </div>)
      }
    </div>
  );
}
export default HomePage;
