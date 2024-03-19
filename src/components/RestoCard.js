import { CDN_URL } from "../../utils/constants";

const RestoCard = (props)=>{
    const {resData} = props
    const {cloudinaryImageId, 
      name, 
      cuisines, 
      avgRatingString, 
      costForTwo,
      } = resData?.info;
      const {link} = resData?.cta;
    return(
      <div className="resto-card">
      <a  href={link}>
        <img src={CDN_URL+cloudinaryImageId}/>      
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRatingString} Star</h5>
        <h5>{costForTwo}</h5>
        </a>
      </div>
    )
  }

 export default RestoCard; 