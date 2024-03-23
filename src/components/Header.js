import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";




const Header = ()=>{
  const [loginBtn, setLloginBtn] = useState(["Login"]);
    return (
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL} />
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li><button onClick={()=> {
              loginBtn === "Login" ? setLloginBtn("Logout") : setLloginBtn("Login");
            }}>{loginBtn}</button></li>
          </ul>
        </div>
      </div> 
    )
  }

 export default Header; 