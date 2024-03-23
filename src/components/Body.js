import RestoCard from "./RestoCard";
import resList from "../../utils/Mockdata";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";


const Body = ()=>{

  const [NewList, setNewList] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filterdList, setfilterdList] = useState([]);

  useEffect(()=>{
    fetchData();
  }, [])

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();
    setNewList(resList)
    setfilterdList(resList)
  }
    return NewList.length === 0 ? <Shimmer /> :(
      <div className="body">
        {
        <div className="searching">
  <input type="text" className="inputtext" value={searchText} onChange={(e) => {
    setsearchText(e.target.value);
  }}/>
  <button className="searchbtn" onClick={() => {

    const filteredList = NewList.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setfilterdList(filteredList);
    setsearchText("");
  }}>Search</button>
</div>}

      <div className="rate-button" onClick={()=> 
      {
        const FilterList = filterdList.filter(
          (res)=> res.info.avgRating>4.3);
          setfilterdList(FilterList);
        }
        }>Ratted Button</div>

      <div className="resto-container">
      {filterdList.map((restaurent)=>
        (
          <RestoCard key={restaurent.info.id} resData = {restaurent}/> 
        ))}
      </div>
      </div>
    )
  }

  export default Body;