import RestoCard from "./RestoCard";
import resList from "../../utils/Mockdata";
import { useState } from "react";


const Body = ()=>{

  const [NewList, setNewList] = useState(resList)

  
    return(
      <div className="body">
        
      <div className="rate-button" onClick={()=> 
      {
        const FilterList = NewList.filter(
          (res)=> res.info.avgRating>4);
          setNewList(FilterList);
        }
        }>Ratted Button</div>
      <div className="resto-container">
      {NewList.map((restaurent)=>
        (
          <RestoCard key={restaurent.info.id} resData = {restaurent}/> 
        ))}
      </div>
      </div>
    )
  }

  export default Body;