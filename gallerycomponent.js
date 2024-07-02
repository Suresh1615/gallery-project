import React from "react"
const Agallery=({data})=>{
    return(
        <div>
            <div className="row">
            {data.map((image)=> 
            <div key={image.id}>
                <div className="col-md-4">
                    <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
                    height="200"width="150"alt={image}/>
                        </div>
    
                
                </div>)}
            </div>
        </div>
    )

}
export default Agallery