
import axios from "axios";
import { useState } from "react"
import Agallery from "./gallerycomponent";
const api_key ="636e1481b4f3c446d26b8eb6ebfe7127";





const Gallery=()=>{
    const[search,setsearch]= useState("");
    const[data,setdata]=useState([])
    
    
    const changeHandler =e=>{
        setsearch(e.target.value);
    }
    const submitHandler =e=>{
       e.preventDefault();
       axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
       .then(response=>{
        setdata(response.data.photos.photo)
        
       })
     
    }
    
     return(
        <center>
        <div>
            <h1>GALLERY SNAPSHOOT</h1>
            <form onSubmit={submitHandler}>
                <input type="text"value={search } onChange={changeHandler}/><br/><br/>
                <input type="submit" name="search"/>
            </form>
            <br/>
            {data.length>=1?<Agallery data={data}/>:<h1>no data loaded</h1>}

            
             
            
        </div>
        </center>
    )
}
export default Gallery