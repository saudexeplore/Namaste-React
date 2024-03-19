import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";




const Footer = ()=>{
  return(
    <div className="footer">
      <div className="important-link">
        <ul>
          <li>About Us</li>
          <li>More Us</li>
          <li>Call</li>
        </ul>
      </div>
      <div className="important-link">
        <ul>
          <li>About Us</li>
          <li>More Us</li>
          <li>Call</li>
        </ul>
      </div>
      <div className="important-link">
        <ul>
          <li>About Us</li>
          <li>More Us</li>
          <li>Call</li>
        </ul>
      </div>
      <div className="important-link">
        <ul>
          <li>About Us</li>
          <li>More Us</li>
          <li>Call</li>
        </ul>
      </div>
    </div>
  )
}


const AppLayout = () =>{
  return (
  <div className="app">
    <Header />
    <Body/>
    <Footer/>
  </div>
  )

}






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)



